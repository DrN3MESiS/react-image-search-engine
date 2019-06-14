import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID b61471995f6e5c4e0b34e6de26d66f43f77fe24d619f764459c2efbb3cd10dc9',
  },
});
