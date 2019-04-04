import Axios from 'axios';

Axios.defaults.baseURL = 'https://newsapi.org/v2/';
Axios.defaults.headers.common.Accept = 'application/json';
Axios.defaults.headers.common['Authorization'] = '077b933b98a14f2fb5e8bbabaf8ce2b7';

export default Axios