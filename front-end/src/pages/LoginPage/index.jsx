import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth.jsx';
import "./styles.css";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();    
    login(email, password)  
  }

  return (
    <>
      <div id="login">
        <h1 className='title'>Login</h1>
        <form className='form'>

          <div className="field">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="password">Senha:</label>
            <input  
              type="email" 
              name="password" 
              id="password" 
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="actions">
            <button 
              type='submit' 
              onClick={handleLogin}
            >Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginPage;