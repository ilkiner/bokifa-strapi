import axios from "axios";  

const api = axios.create({
  baseURL: "http://localhost:1337/api", 
  timeout: 5000,
} ) ;

export const getApiData = async (URL, ...config) => { 
    return () => AxiosInternal.get(URL, ...config). then ( (res) => res.data );
};