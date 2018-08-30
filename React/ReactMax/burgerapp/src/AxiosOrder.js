import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://burgerapp-df975.firebaseio.com/'
});

export default instance;