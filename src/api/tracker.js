import axios from 'axios';

export default axios.create({
  baseURL: 'ngrok-url'
});