// src/components/NavbarComponent.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CarritoContext } from '../contexts/CarritoContext';
import { useUser } from '../contexts/UserContext';  // Importar el UserContext

const Navbar = () => {
  const { calculateTotal } = useContext(CarritoContext);
  const total = calculateTotal();
  const { token, logout } = useUser()
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();  // Llamar a la función logout para cambiar el estado del token
    navigate('/');  // Redirigir a la página de inicio
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">🍕 Home</Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {token ? (
              <>
                <li className="nav-item">
                <Link to="/profile" className="nav-link">🔓Profile</Link>
                </li>
                <li className="nav-item">
                <li><button onClick={handleLogout} to className="nav-link"> 🔒 Logout</button></li> 
              </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">🔐 Login</Link>
                </li>
                <li className="nav-item">
                  <Link to='/register' className="nav-link">🔐 Register</Link>
                </li>
                <li className="nav-item">
                  <Link to='/pizza/p001' className="nav-link">🍕 Pizza #1</Link>
                </li>
                <li className="nav-item">
                  <Link to='/profile' className="nav-link">🔓Profile</Link>
                </li>
                <li className="nav-item">
                  <Link to='/404' className="nav-link">*No encontrado</Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link to='/cart' className="nav-link">
                🛒 Total: ${total > 0 ? total.toLocaleString() : '0'}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
