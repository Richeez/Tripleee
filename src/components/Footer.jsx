import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'



const Footer = () => {
  return (
    <footer className='footer'>

    <div className="footer-wrapper">
      <div className="icon-wrapper">

<FontAwesomeIcon className='icon footer-icon' icon={['fab','facebook']}/>

<FontAwesomeIcon className='icon footer-icon' icon={['fab','twitter']}/>

<FontAwesomeIcon className='icon footer-icon' icon={['fab','instagram']}/>

<FontAwesomeIcon className='icon footer-icon' icon={['fab','spotify']}/>
      </div>
      <div className="text-box">&copy; 2022 Tripleee | All rights reserved</div>
    </div>
  



    </footer>

    )
}

export default Footer