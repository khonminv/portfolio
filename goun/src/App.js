import './css/style.css';
import Line from './components/Line';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Footer from './components/Footer';
import Uiscript from './UiScript';
import './lng/i18n';

function App() {
  return (
	<>
		<Uiscript/>
		<Line />
		<div className="wrapper">
			<div className="cursor"></div>
			<Header />
			<Main />
			<Section />
			<Footer />
		</div>
	</>
  );
}

export default App;
