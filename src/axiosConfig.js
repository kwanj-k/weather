  
import axios from "axios";

const axiosConfig = axios.create({
    
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosConfig;
