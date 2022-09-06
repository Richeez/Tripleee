// import { dom } from '@fortawesome/fontawesome-svg-core'
import './App.css';

import Header from './components/Header';

import Maincontent from './components/Maincontent';

import Footer from './components/Footer';

import {useRef} from 'react'

// dom.watch()


function App() {

  const refMenu = useRef();

  const refBar = useRef();

  const menuBarHandler = () => {
    refMenu.current.classList.toggle('reset')

    refBar.current.classList.toggle('nav-bar-close')



  }


  return (
    <div className="App">
      <Header bar={refBar} menu={refMenu} toggleMenuBar={menuBarHandler} />
      <Maincontent/>
      <Footer/>
    </div>
  );
}

export default App;
