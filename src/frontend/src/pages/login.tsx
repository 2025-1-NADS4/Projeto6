import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import iconLogo from '../assets/icon-muuve.png';

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState<string>(''); 
  const navigate = useNavigate();

  
  useEffect(() => {
    document.body.classList.add('no-scroll');
    
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dadosLogin = {
      usuario,
      senha,
    };

    console.log('Dados enviados para login:', dadosLogin); 

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosLogin),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Login bem-sucedido');
        navigate('/');
      } else {
        const data = await response.json();
        console.log('Erro do backend:', data);
        setError(data.erro || 'Erro desconhecido');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Ocorreu um erro ao tentar fazer login.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box p-4 rounded shadow">
        <div className="text-center mb-4">
          <img
            src={iconLogo}
            alt="Logo"
            width="100"
            height="100"
            className="mb-2"
          />
          <h2 className="text-purple">MuuveNow</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label text-white">Usuário</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-purple"
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Digite seu nome de usuário"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">Senha</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-purple"
              id="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
          <button type="submit" className="btn btn-purple w-100">Entrar</button>
        </form>
        {error && <p className="text-danger">{error}</p>}
        <div className="mt-3 text-center">
          <p className="text-white">
            Não tem uma conta? <Link to="/register" className="text-purple">Registre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
