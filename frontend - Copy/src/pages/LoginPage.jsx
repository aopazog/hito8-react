import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validarDatos = (e) => {
    e.preventDefault();
    if (!email.trim() || !pass.trim()) {
      setError('Todos los campos son obligatorios');
      setSuccess('');
      return;
    }
    if (pass.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setSuccess('');
      return;
    }
    setError('');
    setSuccess('Login exitoso');
  };

  return (
    <form onSubmit={validarDatos}>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-group">
        <label>Contraseña</label>
        <input
          type="password"
          name="pass"
          className="form-control"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
      </div>
      <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
    </form>
  );
}

export default LoginPage;
