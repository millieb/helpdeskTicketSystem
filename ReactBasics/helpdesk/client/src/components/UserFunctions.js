import axios from "axios";

export const register = newUser => {
  return axios
    .post('http://localhost:3001/auth', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered');
    });
}

/* export const userLogin = user => {
  return axios
    .post('http://localhost:3001/auth/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      //localStorage.setItem('usertoken', response.data);
      //return response.data;
      console.log('Logged in from user functions');
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    })
} */
