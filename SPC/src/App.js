import './css/style.css'
import Dim from './components/Dim';
import Start from './components/start/Start';
import Section from './components/section/Section';
import SPCnow from './components/spcnow/SPCnow';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="wrapper">
		<Dim />
		<Start />
		<Section />
		<SPCnow />
		<Footer />
	</div>
  );
}

export default App;
