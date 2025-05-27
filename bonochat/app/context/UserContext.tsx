'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface User {
  name: string;
}


interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
  login: (name: string, password: string) => Promise<void>;
  register: (name: string, password: string) => Promise<void>;
}
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';
const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    setUser(null);
    alert('로그아웃 되었습니다');
  };

  const login = async (name: string, password: string) => {
    try {
      const res = await axios.post(`${API_URL}/login`, { name, password });
      setUser(res.data.user);
      alert(`${res.data.user.name}님 환영합니다`);
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        alert(err.response.data?.error || '로그인 실패');
      } else {
        alert('로그인 실패');
      }
      throw err;
    }
  };

  const register = async (name: string, password: string) => {
    try {
      const res = await axios.post(`${API_URL}/register`, { name, password });
      setUser(res.data.user);
      alert(`${res.data.user.name}님 환영합니다`);
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        alert(err.response.data?.error || '회원가입 실패');
      } else {
        alert('회원가입 실패');
      }
      throw err;
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, login, register }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}
