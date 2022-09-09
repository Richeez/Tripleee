// import React from 'react'

// function Hello({data}) {
// console.log(data);
//     return (
//     <div>{data?.btc?.value}</div>
//   )

  
//       // console.log('as item',item)
//      /*  {data?.map((item) => (

//       ))} */
// }

// export default Hello

// const CryptoHack = () => {

// const [loading, setLoading] = useState(true);

// const [data, setData] = useState([]);

// useEffect(() => {
//   const fetchData = async () =>{

//     setLoading(true);

//     try{
//       const response = await fetch('https://api.coingecko.com/api/v3/exchange_rates');

//       const respData = await response.json()

//       const result = Object.values(respData)

//       setData(result);

//     }catch (error){

//       console.log(error);

//     }
//     setLoading(false);
//   }

// fetchData();
// }, [])

// return(
//   <div>
//   {loading && <div>Loading</div>}
//   {!loading && (
//     <div>
//       <h2>Doing stuff with data</h2>
//       {data.map(item => (<span>{item.name}</span>))}
//     </div>
//   )}
//   </div>



// )

// }
