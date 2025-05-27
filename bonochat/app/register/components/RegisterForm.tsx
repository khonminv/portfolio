import { useState } from 'react';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const { setUser } = useUser();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/login`, { name, password });
      setUser(res.data.user);
      alert(`${res.data.user.name}님 환영합니다`);
	  router.push("/");
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        alert(err.response.data?.error || '회원가입 실패');
      } else {
        alert('회원가입 실패');
      }
    }
  };

  return (
    <form onSubmit={handleRegister} className="registerform">
      <h3>회원가입</h3>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="이름" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="비밀번호" />
      <button type="submit">회원가입</button>
    </form>
  );
}
