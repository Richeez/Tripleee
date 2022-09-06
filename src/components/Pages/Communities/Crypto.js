import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { createContext, useState } from 'react'
import CryptoHack from '../CryptoHack'

export const UseContext = createContext()
const Crypto = () => {
  const [newResult, setNewResult] = useState({
    id:'bitcoin',
    name:'Bitcoin',
    price:190703.63,
    image:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    date: "Mon, 05 Sep 2022 13:24:52 GMT",
    symbol:'btc'
  })

  console.log(newResult, "newResult")
  function clickHandler (id, name, image, price, date, symbol){
    setNewResult({
      id: id,
      name: name,
      image: image,
      price: symbol,
      symbol: date,
      date: price
    })
}


  return (
    <UseContext.Provider value={{clickHandler }}>

    <section className=' section sec3'>

<div className="glass">
<div className='cryptoViewer-cont'>
 <h2 className='name'>{newResult.name}</h2>
   <div className="crypto-preview">
    <div className="img-cont">
<span  onClick={() => window.location.reload()} className='reload-cont'>
   <FontAwesomeIcon  className='reload' icon={['fa', 'rotate-forward']}/>
</span>
    <div className="crypto-img">
      
      <img src={newResult.image} loading='lazy' alt="bitcoin icon" />
    </div>

    </div>
    <div className='value span-2'>
    <p className='price'>&#36;&#160;{newResult.price}<span className='grey'></span> {newResult.symbol}</p>


    </div>
    <div className="type-cont span-whole">
    <p className="type">Last Updated: {newResult.date}</p>

    </div>
  </div>

</div>
        <div className="random-cont">
          <div className="tokens">
          <CryptoHack/>
          </div>
        </div>
        </div>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
    </section>  
    </UseContext.Provider>


  ) 
}

export default Crypto