// import './App.css';
import Register from './../service/RegisterAPI';
import { useState } from 'react';
import styled from 'styled-components';

const StyledLogin = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;

.register{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 350px;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;

  input[type=text],
  input[type=email],
  input[type=password]{
    width: 90%;
    height: 30px;
    padding-left: 15px;
    border-radius: 5px;
    border-style: none;
  }
  button{
    width: 90%;
    height: 30px;
    border-radius: 5px;
    border-style: none;
    &:hover{
      transform: scale(1.05);
    }
  }

  .show-controll{
    width: 95%;
    display: flex;
    color: white;
    font-size: small;
    align-items: center;
  }
  
}

.submit-register{
  width: 200px;
}
.showPassword{
  display: block;
}

.hiddenPassword{
  display: none;
}

.card-title{
  color: white;
}

`;

function RegisterPage() {

  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [load, setLoad] = useState('hiddenPassword')
  const [visible, setVisible] = useState('password')
  const user = {
    username: username,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  }

  function resolve3s() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          window.location.reload()
        );
      }, 3000);
    });
  }
  async function registerHandler() {
    setLoad('showPassword')
    Register(user)
    await resolve3s();
    setLoad('hiddenPassword')
  }

  const visibleHandler = () => {
    if(visible === 'password'){
      setVisible('text')
    }
    if(visible === 'text'){
      setVisible('password')
    }
  }

  return (
    <StyledLogin>
    <div className="App">
      <div className='register'>
        <div className='card-title'>
          <h3>Registro de usuario</h3>
        </div>
        <input placeholder="Nome" type={'text'} onChange={(event)=>setUsername(event.target.value)} value={username} />
        <input placeholder="Email" type={'email'} onChange={(event)=>setEmail(event.target.value)} value={email}/>
        <input placeholder="Senha" type={visible} onChange={(event)=>setPassword(event.target.value)} value={password} />
        <input placeholder="Confirma senha" type={visible} onChange={(event)=>setConfirmPassword(event.target.value)} value={confirmPassword}/>
        <div className='show-controll'>
          <input type={'checkbox'} onChange={visibleHandler} placeholder="ver senha"/>
          Mostrar senha
        </div>
        <span>
          {(password !== '') && (confirmPassword !== '') && (password !== confirmPassword) ? "senhas nao coincidem" : null}
        </span>
        <button className='submit-register' onClick={registerHandler}>Cadastrar</button>
      </div>
      <span className={load}>Carregando</span>
    </div>
    </StyledLogin>
  );
}

export default RegisterPage;
