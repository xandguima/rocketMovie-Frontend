import axios from "axios"

export const api = axios.create({
  baseURL:"https://rocketmovie-api-dbg3.onrender.com"
});