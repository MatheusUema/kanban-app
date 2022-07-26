import axios  from 'axios'

export const login = async() => {
    const res = axios.post('http://0.0.0.0:5000/login/', {
        login: 'letscode',
        senha: 'lets@123'
      })
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        console.log(error);
      })
      return res;
}
