import React from 'react'

import {Link} from 'react-router-dom'
// import CryptoHack from '../CryptoHack'





const Community = () => {

  // const [checker, setChecker] = useState()

  // console.log('as initial result', checker);



  return (
    <section className='section sec3'>
        <div className="glass">
          <div className="communities">
            <div className="cummunity">
              <div className="img-cont">
                <img src="./images/Crypto.jpg" loading='lazy' alt="" />
              </div>
              <div className="overlay">
              <h2>crypto world!</h2>

              <button className="btn"><Link className='text-deco' to='./Crypto'>Get In</Link>
</button>
{/* <CryptoHack/> */}
              </div>
            </div>
            <div className="cummunity">
              <div className="img-cont">
                <img src="./images/nft-token.jpeg" loading='lazy' alt="" />
              </div>
              <div className="overlay">
                <h2>nft world!</h2>
              <button className="btn"><Link className='text-deco' to=''>Get In</Link>
</button>

              </div>
            </div>
          </div>
        </div>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        </section>
  )         
}

export default Community