const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);

// CORS 설정
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

// Express 앱의 CORS도 허용
app.use(cors({
    origin: 'http://localhost:3000',
}));

// MongoDB 연결
mongoose.connect('mongodb://localhost/chat')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const messageSchema = new mongoose.Schema({
    name: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

app.get('/', (req, res) => {
    res.send('Server is running');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    // 이전 메시지 로드
    Message.find().sort({ createdAt: 1 }).then(messages => {
        socket.emit('load messages', messages);
    });

    socket.on('chat message', ({ name, message }) => { // 이름과 메시지를 객체로 받음
        const newMessage = new Message({ name, message });
        newMessage.save().then(() => {
            io.emit('chat message', { name, message }); // 이름과 메시지를 전송
        });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});