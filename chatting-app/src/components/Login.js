import { useState } from 'react';
import axios from 'axios';

const Auth = ({ onLogin }) => {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <button onClick={() => setIsRegister(false)}>로그인</button>
                <button onClick={() => setIsRegister(true)}>회원가입</button>
            </div>
            {isRegister ? (
                <RegisterForm onLogin={onLogin} />
            ) : (
                <LoginForm onLogin={onLogin} />
            )}
        </div>
    );
};

const LoginForm = ({ onLogin }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(process.env.REACT_APP_API_URL + '/login', { name, password });
            onLogin(res.data.user);
            alert(`${res.data.user.name}님 환영합니다`);
        } catch (err) {
            alert(err.response?.data?.error || '로그인 실패');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h3>로그인</h3>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="이름" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="비밀번호" />
            <button type="submit">로그인</button>
        </form>
    );
};

const RegisterForm = ({ onLogin }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(process.env.REACT_APP_API_URL + '/register', { name, password });
            onLogin(res.data.user);
            alert(`${res.data.user.name}님 환영합니다`);
        } catch (err) {
            alert(err.response?.data?.error || '회원가입 실패');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h3>회원가입</h3>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="이름" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="비밀번호" />
            <button type="submit">회원가입</button>
        </form>
    );
};

export default Auth;
