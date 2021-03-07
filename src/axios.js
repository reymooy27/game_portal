import axios from "axios";
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';
const instance = axios.create({
  baseUrl: 'https://cors-anywhere.herokuapp.com/',
  adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter))
});

export default instance;