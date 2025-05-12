import './css/style.css'
import Start from './components/Start';
import Section from './components/Section';
import SPCnow from './components/SPCnow';
import Footer from './components/Footer';
import UiScript from './UiScript';


function App() {
  return (
    <div className="wrapper">
		<UiScript/>
		<Start />
		<Section />
		<SPCnow />
		<Footer />
	</div>
  );
}

export default App;
