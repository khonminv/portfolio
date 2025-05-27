'use client';
import { useUser } from "../context/UserContext";

export default function User() {
	const {user} = useUser()
  return (
    <section id="user">
      <div className="user_top">유저 정보</div>
      <div className="user_mid">
        {user ? (
          <p>이름 : {user.name}</p>
        ) : (
          <p>로그인 해주세요.</p>
        )}
      </div>
      <div className="user_bot"></div>
    </section>
  );
}
