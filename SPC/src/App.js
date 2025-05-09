import './css/style.css'
import Start from './components/Start';
import Section from './components/Section';
import SPCnow from './components/SPCnow';
import Footer from './components/Footer';


function App() {
  return (
    <div className="wrapper">
		<Start />
		<Section />
		<SPCnow />
		<Footer />
	</div>
  );
}

export default App;
