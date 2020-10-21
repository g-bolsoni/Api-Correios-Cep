import axios from 'axios';

const apiCorreios = axios.create({
  baseURL: 'hhtp://localhost/3001/:cep',
});

export default apiCorreios;
