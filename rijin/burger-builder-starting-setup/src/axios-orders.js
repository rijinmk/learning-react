import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'https://react-burger-builder-9bc18-default-rtdb.firebaseio.com/',
}); 

export default instance; 