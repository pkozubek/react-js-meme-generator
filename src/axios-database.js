import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://memegenerator-1409b.firebaseio.com/'
})

export default instance;