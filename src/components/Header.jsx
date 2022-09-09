// import {useState} from 'react'

// import  './Maincontent';

import { Link} from 'react-router-dom'


const Header = (props) => {



  return (
    <header className='header'>
      <div ref={props.bar}  onClick={props.toggleMenuBar}  className="nav-bar">
        <div className="bugger">
          <div className='center'></div>
        </div>
      </div>
            <div className="brand-name">
                <h1>
            <Link  className='text-deco' to='./'>
                  tripleee
              </Link>
                  </h1>
            </div>
      <div ref={props.menu} className='nav-body'>

        <nav className='nav'>
            <ul className='linkCont'>
                <li>
                  <Link onClick={props.toggleMenuBar} className='text-deco' to='./'>buy nft </Link>
                </li>
                <li>
                  <Link onClick={props.toggleMenuBar}  className='text-deco' to='./Community'>community</Link>
                </li>
                <li>
                  <Link onClick={props.toggleMenuBar}  className='text-deco' to=''>learn trading</Link>
                </li>
                <li> 
                  <Link onClick={props.toggleMenuBar}  className='text-deco' to=''>about us</Link> 
                  </li>
            </ul>

        </nav>
        <div className="btn-cont">
        <div className="connect-wallet btn">
<li>connect wallet</li>
        </div>
        <div className="sign-up btn">
<li>sign up</li>
        </div>

        </div>
      </div>
    </header>
  )
}



export default Header