require('dotenv').config(); // dotenv 패키지 불러오기
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');

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

// MongoDB 연결
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost/chat'; // 환경 변수에서 URI 가져오기
mongoose.connect(mongoUri)
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

// 메시지 삭제 API
app.delete('/messages/:id', (req, res) => {
    const { id } = req.params;
    console.log("Deleting message ID:", id); // 삭제할 메시지 ID 출력
    Message.findByIdAndDelete(id)
        .then(() => {
            io.emit('message deleted', id); // 삭제된 메시지 ID를 클라이언트에 전송
            res.status(200).send();
        })
        .catch(err => {
            console.error('Delete error:', err);
            res.status(500).send();
        });
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