import {useState, useEffect, useContext} from 'react'
import RandomData from './Communities/RandomData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UseContext } from './Communities/Crypto'



const CryptoHack = () => {
  const {clickHandler} = useContext(UseContext)
  const [result, setResult] = useState()

  // const [newResult, setNewResult] = useState({
  //   id:'',
  //   name:'',
  //   price:'',
  //   image:'',
  //   date:'',
  //   symbol:''
  // })


  /* console.log('as newresult', newResult) */

  const cryptoData = async () => {

    const response =  await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

    const data = await response.json();

    // const respData = Object.entries(data);

    setResult(data);
    // console.log('as data',data);
  }
useEffect(() => {
  cryptoData();
}, [])

// function clickHandler(id, name, image, price, date, symbol){
  
//   setNewResult({
//  id: id,
// name: name,
// image: image,
// price: symbol,
// symbol: date,
// date: price

// })




// }


                        

// const defaultDisplay = [...item][0]
//setResult()


  return (
    <>
{!result?.length ?  <div className='spinner-cont'><FontAwesomeIcon className='spinner' icon={['fa', 'spinner']} spin /></div> : result?.map(item => {
          let time = new Date(item?.last_updated).toUTCString();

            return(

            <RandomData
            key={item?.id}
            id={item?.id}
            image={item?.image}
            name={item?.name}
            item={item}
            price={item?.current_price}
            date={time}
            symbol={item?.symbol}
            updateState={clickHandler}
            />
              

            )

                        
                        
})}
    
    </>

  
    
  ) 
}




export default CryptoHack
