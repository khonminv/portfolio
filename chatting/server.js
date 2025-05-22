const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
require('dotenv').config({ path: envFile });
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const app = express();
const server = http.createServer(app);
const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:3000';

// CORS 설정
const io = socketIo(server, {
    cors: {
        origin: allowedOrigin,
        methods: ['GET', 'POST', 'DELETE'],
    }
});

// Express 앱의 CORS도 허용
app.use(cors({
    origin: allowedOrigin,
}));

app.use(express.json());

// MongoDB 연결
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost/chat';
mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const messageSchema = new mongoose.Schema({
    name: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});


const User = mongoose.model('User', userSchema);

const Message = mongoose.model('Message', messageSchema);



app.get('/', (req, res) => {
    res.send('Server is running V09');
});

// 메시지 삭제 API

app.delete('/messages/:id', async (req, res) => {
    const { id } = req.params;
    console.log("Deleting message ID:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("Invalid ObjectId:", id);
        return res.status(400).send("Invalid message ID format");
    }

    try {
        const deleted = await Message.findByIdAndDelete(id);
        if (!deleted) {
            console.log("Message not found:", id);
            return res.status(404).send("Message not found");
        }

        io.emit('message deleted', id);
        res.status(200).send();
    } catch (err) {
        console.error('Delete error:', err);
        res.status(500).send();
    }
});

//로그인 api
app.post('/login', async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) return res.status(400).json({ error: '이름과 비밀번호가 필요합니다.' });

    const user = await User.findOne({ name });
    if (!user) return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: '비밀번호가 틀렸습니다.' });

    res.json({ success: true, user: { name: user.name } });
});


//회원가입api
app.post('/register', async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) return res.status(400).json({ error: '이름과 비밀번호가 필요합니다.' });

    const existingUser = await User.findOne({ name });
    if (existingUser) return res.status(409).json({ error: '이미 존재하는 사용자입니다.' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, password: hashedPassword });
    await newUser.save();

    res.json({ success: true, user: { name: newUser.name } });
});


io.on('connection', (socket) => {
    console.log('A user connected');

    // 이전 메시지 로드
    Message.find().sort({ createdAt: 1 }).then(messages => {
        socket.emit('load messages', messages);
    });

    socket.on('chat message', ({ name, message }) => {
        const newMessage = new Message({ name, message });
        newMessage.save().then((savedMessage) => {
            io.emit('chat message', savedMessage);
        });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});