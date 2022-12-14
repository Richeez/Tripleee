import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

const HomePage = () => {
  return (
    <>
        <section className='section sec1 '>
        <div className="clip-path"></div>
        <div className="main-heading">

        <div className="main-items">
        <div className="main-item-sizer">

        <div className="main-item-cont">
        <div className="main-item-left">
        <img src="/images/nft-token.jpg" loading='lazy' alt="" />
        </div>
        <div className="profile-wrapper">
        <div className="left-side">
        <div className="img-wrapper">
        <img src="/images/elon-musk-1.jpg" loading='lazy' alt="" />
        </div>
        <div className="text-box ">
        <p className='small-text align-left'>Name of Artist</p>
        <p className='bold'>Elon Musk</p>
        </div>
        </div>
        <div className="right-side">
        <div className="figures-wrapper text-box">
        <p className='small-text align-right'>Future Bid</p>
        <p className='bold'>12.457334 ETH</p>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="main-item-right span-2">
        <div className="text-wrapper">
        <h2>Trade In NFTS</h2>
        <p>What will you do if this is your only chance to making a fortune out of what you consider as mere talent? Which unknown to you can actually make you a fortune of a life time.</p>
        </div>
        <div className="right-items ">
        <div className="right-item">
        <div className="img-cont">
        <div className="img-wrapper">
        <img src="/images/profile-1.jpg" loading='lazy' alt="" />
        </div>
        <div className="img-wrapper">
        <img src="/images/profile-2.jpg" loading='lazy' alt="" />
        </div>
        <div className="img-wrapper">
        <img src="/images/profile-3.jpg" loading='lazy' alt="" />
        </div>
        <div className="img-wrapper">
        <img src="/images/profile-5.jpg" loading='lazy' alt="" />
        </div>

        </div>
        <div className=" btn-2">
        <li>purchase now</li>
        </div>

        </div>
        <div className="right-item ">
        <div className="text-cont">
        <p className='view-count bold'>15k+</p>
        <p>There is no time to have a second thought on this! Make aye while the sun shine.</p>
        </div>
        <div className=" connect-wallet blur-bg">
        <li>place a bid</li>
        </div>

        </div>
        </div>
        <div className="stats">
        <div className="stat">
        <p className='bold figure'>10k+</p>
        <span className='text'>earn nfts</span>
        </div>
        <div className="stat">
        <p className='bold figure'>70k+</p>
        <span className='text'>products</span>
        </div>
        <div className="stat">
        <p className='bold figure'>05k+</p>
        <span className='text'>nft artist</span>
        </div>
        </div>

        </div>

        </div>
        </div>
        </section>

        <section className="section sec2">
        <div className="about-page">
        <div className="right-side">
        <h2>We Are The Best Trading Platform In USA</h2>
        <p>We'll guide you through portfolio options, risk levels, goal setting, and savings features.</p>
        </div>
        <div className="left-side">
        <div className="items">
        <div className="item">
        <div className="icon-wrapper">
        <FontAwesomeIcon className='icon' icon={['fa','money-bill']}/>
        </div>
        <h3>Easy to buy</h3>
        <p>Get started with as little as $10 and use our top-rated mobile app to invest on the go.</p>
        </div>
        <div className="item">
        <div className="icon-wrapper">
        <FontAwesomeIcon className='icon' icon={['fa','wave-square']}/>
        </div>
        <h3>Easy to trade</h3>
        <p>We put the robots to work for you, with automated tools and strategies that help unlock your money???s potential.</p>
        </div>
        <div className="item">

        <div className="icon-wrapper">
        <FontAwesomeIcon className='icon' icon={['fa','lock']}/>
        </div>
        <h3>Safe & Secure</h3>
        <p>Connect all outside accounts and manage your financial life in one place.</p>
        </div>
        <div className="item">
        <div className="icon-wrapper">
        <FontAwesomeIcon className='icon' icon={['fa','wallet']}/>
        </div>
        <h3>More Profitable</h3>
        <p>What will you do if this is your only chance to making a fortune out of what you consider as mere talent? Which unknown to you can actually make you a fortune of a life time.</p>
        </div>
        </div>
        </div>
        </div>
        </section>
    </>
  )
}

export default HomePage
