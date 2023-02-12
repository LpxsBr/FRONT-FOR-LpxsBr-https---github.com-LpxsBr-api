import axios from 'axios'
export default function Register({...props}){

    const url = 'localhost:8080/users/add'
    // Send a POST request
axios({
    method: 'post',
    url: 'http://localhost:8080/users/add', 
    data: {
        username: props.username,
        email: props.email,
        password: props.password,
        confirmPassword: props.confirmPassword
    }
  })
    .then((resp)=>console.log(resp.data.msg))
    .catch((err)=>console.log(err.error))
}