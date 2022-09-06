import React from 'react'





const RandomData = (props) => {




    return (
      <div  onClick={() => props.updateState(props.id ,props.name, props.image, props.date, props.symbol, props.price)} className="token">
       <div className="img-cont">
        <div className="crypto-img">
        <img src={props.item?.image} loading='' alt="crypto icon" />
        </div>
        <div className="crypto-unit">
        <p>{props.item?.symbol}</p>
        </div>
        </div>
            </div>
    )
  }


export default RandomData