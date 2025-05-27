'use client';

import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const { login } = useUser();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(name, password);
      router.push('/');
    } catch {
      // 에러는 UserContext 내부에서 처리 (alert)
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="loginform">
      <h3>로그인</h3>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="이름"
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="비밀번호"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? '로그인 중...' : '로그인'}
      </button>
    </form>
  );
}
