import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import iconLogo from '../assets/icon-muuve.png';

const Register: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [error, setError] = useState<string>(''); // Para exibir mensagens de erro
  const navigate = useNavigate();

  // Adiciona a classe 'no-scroll' ao body quando o componente é montado
  useEffect(() => {
    document.body.classList.add('no-scroll');
    
    // Remove a classe 'no-scroll' quando o componente for desmontado
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (senha !== confirmaSenha) {
      setError('As senhas não coincidem.');
      return;
    }

    const dadosCadastro = {
      usuario,
      senha,
    };

    console.log('Dados enviados para cadastro:', dadosCadastro); // Verifique os dados no console

    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosCadastro),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Cadastro bem-sucedido');
        navigate('/login');
      } else {
        const data = await response.json();
        console.log('Erro do backend:', data);
        setError(data.erro || 'Erro desconhecido');
      }
    } catch (error) {
      console.error('Erro ao fazer cadastro:', error);
      setError('Ocorreu um erro ao tentar fazer cadastro.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box p-4 rounded shadow">
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
            <label htmlFor="senha" className="form-label text-white">Senha</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-purple"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmaSenha" className="form-label text-white">Confirmar Senha</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-purple"
              id="confirmaSenha"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
              placeholder="Confirme sua senha"
            />
          </div>
          <button type="submit" className="btn btn-purple w-100">Cadastrar</button>
        </form>
        {error && <p className="text-danger">{error}</p>}
        <div className="mt-3 text-center">
          <p className="text-white">
            Já tem uma conta? <Link to="/login" className="text-purple">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
