import axios from "axios";

const apiKey = '_Ie7vbSfaqa6xauaze2sY875LMCTpI1nymc3dMjOSBeuNaH9xQhHtIIYp1Ly2HlRIb9hhbe1MVY8ao4RhI1B1dhvzz8umrLhiD9ubp0tzsk-glzQj5km3rZgqfB7ZnYx';
const apiUrl = 'https://api.yelp.com/v3/businesses/search';

const fetchBusinesses = async () => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      params: {
        location: 'İstanbul' // Örnek bir yer belirtin
      }
    });
    console.log('Yelp API Response:', response.data);
  }
  catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchBusinesses();

