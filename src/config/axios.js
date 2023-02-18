import axios from 'axios';

// Para instalar axios ==> npm i axios

const clienteAxios = axios.create({
	baseURL: 'http://localhost:4002/'
});

export default clienteAxios;