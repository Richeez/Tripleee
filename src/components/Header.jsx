import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <div className="nav-bar">
        <div className="bugger">
          <div></div>
        </div>
      </div>
            <div className="brand-name">
                <h1>tripleee</h1>
            </div>
      <div className="nav-body">

        <nav className='nav' >
            <ul className='linkCont'>
                <li>buy nft</li>
                <li>community</li>
                <li>learn trading</li>
                <li>about us</li>
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