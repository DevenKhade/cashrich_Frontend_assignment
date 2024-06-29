// // CryptoDashboard.js

// import React, { useEffect, useState } from 'react';
// import { getCryptoData } from './api';

// const Home = () => {
//   const [cryptoData, setCryptoData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getCryptoData();
//         setCryptoData(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     }

//     fetchData();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Crypto Data</h1>
//       <ul>
//         {cryptoData.map(crypto => (
//           <li key={crypto.id}>{crypto.name}: {crypto.price}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
