import Login from "./Login";
import News from "./News";
import Mainslide from "./Mainslide";
import Poroly from "./Poroly";

function Home({ user, setUser, onLogout }) {
	

    return (
        <section id="home">
			<div className="h_header">
				
				<Login onLogin={(user) => setUser(user)} onLogout={onLogout} user={user} />
			</div>
			<Mainslide />
			<div className="news">
				<h3>새로운 소식</h3>
				<News />
			</div>
			<div className="poroly">
				<h3>포로리</h3>
				<Poroly />
			</div>
			<div className="nubury">
				<h3>너부리</h3>
				
			</div>
			
        </section>
    );
}
export default Home;
