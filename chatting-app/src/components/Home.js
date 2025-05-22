import Login from "./Login";
import News from "./News";
import Mainslide from "./Mainslide";
function Home({ user, setUser, onLogout }) {
	

    return (
        <section id="home">
			<div className="h_header">
				{
					user?
					(
						<div className="logbox">
							<p>{`${user.name}님 환영합니다`}</p>
							<a onClick={onLogout}>로그아웃</a>
						</div>
					):
					(
						<div className="logbox"><p>로그인 해주세요</p></div>
					)
				}
				<Login onLogin={(user) => setUser(user)} />
			</div>
			<Mainslide />
			<div className="news">
				<h3>새로운 소식</h3>
				<News />
			</div>
			<div className="polory">
				<h3>포로리</h3>
				
			</div>
			<div className="nubury">
				<h3>너부리</h3>
				
			</div>
			
        </section>
    );
}
export default Home;
