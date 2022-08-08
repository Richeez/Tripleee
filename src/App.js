import './App.css';



// import { dom } from '@fortawesome/fontawesome-svg-core'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';

// dom.watch()

function App() {
  return (
    <div className="App">
      <Header/>
      <Maincontent/>
      <Footer/>
    </div>
  );
}

export default App;
