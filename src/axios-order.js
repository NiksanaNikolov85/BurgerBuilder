import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e841c.firebaseio.com/'
})

export default instance;