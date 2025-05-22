import { useState } from 'react'; // ← 추가
import './css/style.css';
import Chat from './components/Chat';
import Gnb from './components/Gnb';
import Home from './components/Home';
import Board from './components/Board';
import User from './components/User';
import UiScript from './UiScript';

const App = () => {
    const [user, setUser] = useState(null);

    const handleLogout = () => {
        setUser(null);
        alert('로그아웃 되었습니다');
    };

    return (
        <div id='wrapper'>
            <UiScript />
			<Dim />
            <Gnb />
            <Home user={user} setUser={setUser} onLogout={handleLogout} />
            <Chat user={user} setUser={setUser}/>
            <Board user={user} setUser={setUser}/>
            <User user={user} setUser={setUser}/>
        </div>
    );
};

export default App;

function Dim(){
	return(
		<div className='dim'></div>
	)
}