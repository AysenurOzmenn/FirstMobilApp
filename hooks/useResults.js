// import { useEffect, useState } from "react";
// import yelp from "../api/yelp";

// export default () => {
//   const [results, setResults] = useState([])
//   const searchApi = async (searchTerm) => {
//     const response = await yelp.get('/search', {
//       params: {
//         limit: 20,
//         term: searchTerm,
//         location: 'İstanbul',
//       },
//     });
//     setResults(response);
//   };
//   useEffect(() => {
//     searchApi('Toast');
//   }, []);

 
//   return [searchApi, results];
// };

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useResults() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
        headers: {
          Authorization: `Bearer _Ie7vbSfaqa6xauaze2sY875LMCTpI1nymc3dMjOSBeuNaH9xQhHtIIYp1Ly2HlRIb9hhbe1MVY8ao4RhI1B1dhvzz8umrLhiD9ubp0tzsk-glzQj5km3rZgqfB7ZnYx`,
        },
        params: {
          term: searchTerm,
          location: 'İstanbul',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
      console.error(err);
    }
  };

  // Default search
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
}




