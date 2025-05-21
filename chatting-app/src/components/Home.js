import Login from "./Login";

function Home({ user, setUser, onLogout }) {
    return (
        <section id="home">
			{
				user?
				(
					<>
						<p>{`${user.name}님 환영합니다`}</p>
						<button onClick={onLogout}>로그아웃</button>
					</>
				):
				(<span>로그인 해주세요</span>)
			}
            <Login onLogin={(user) => setUser(user)} />
        </section>
    );
}
export default Home;
