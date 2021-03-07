import axios from "axios";
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';
const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.pandascore.co',
  adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter))
});

export default instance;