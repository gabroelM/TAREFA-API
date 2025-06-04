import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export default function Registro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    const res = await api.register(nome, email, senha);
    if (res.mensagem === 'Usuario foi criado') {
      alert('Usuário criado! Faça login.');
      navigate('/');
    } else {
      alert(res.mensagem);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
}
