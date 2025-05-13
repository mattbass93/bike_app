import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim() === '') return;

    // 🔐 Enregistre le nom dans localStorage
    localStorage.setItem('user', username);

    // 🔁 Redirige vers /dashboard
    navigate('/dashboard');
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="mb-4">Connexion</h1>
      <form onSubmit={handleLogin} className="w-100" style={{ maxWidth: '300px' }}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ex. Matthis"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
