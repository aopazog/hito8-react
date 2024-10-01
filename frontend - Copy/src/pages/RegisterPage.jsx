import React, { useState } from 'react';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validarDatos = (e) => {
    e.preventDefault();
    if (!email.trim() || !pass.trim() || !confirmPass.trim()) {
      setError('Todos los campos son obligatorios');
      setSuccess('');
      return;
    }
    if (pass.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setSuccess('');
      return;
    }
    if (pass !== confirmPass) {
      setError('Las contraseñas no coinciden');
      setSuccess('');
      return;
    }
    setError('');
    setSuccess('Registro exitoso');
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
      <div className="form-group">
        <label>Confirmar Contraseña</label>
        <input
          type="password"
          name="confirmPass"
          className="form-control"
          onChange={(e) => setConfirmPass(e.target.value)}
          value={confirmPass}
        />
      </div>
      <button type="submit" className="btn btn-primary">Registrar</button>
    </form>
  );
}

export default RegisterPage;
