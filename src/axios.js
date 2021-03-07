import axios from "axios";
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';
const instance = axios.create({
  // withCredentials: true,
  // headers: { 'Cache-Control': 'no-cache' },
  adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter))
});

export default instance;