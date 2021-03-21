import axios from 'axios';
import { api } from './constants';


export const getData = async () => {
  try {
    const res = await axios.get(`${api}`)
    return await res;
  } catch (error) {

  }
}
