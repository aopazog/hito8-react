  import React from 'react';
  import Navbar from './components/Navbar';
  import Home from './pages/Home';
  import Footer from './components/Footer';
  import RegisterPage from './pages/RegisterPage';
  import LoginPage from './pages/LoginPage';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Cart from './pages/Cart';
  import Pizza from './pages/Pizza';
  import NotFound from './components/NotFound';
  import Profile from './components/Profile';
  import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom'; // Agrega BrowserRouter
  import { CarritoProvider } from './contexts/CarritoContext'; // Asegúrate de que la ruta sea correcta
  import { useUser } from './contexts/UserContext';
  const App = () => {
    const { token } = useUser()
    return (
      <CarritoProvider> {/* Envuelve toda la aplicación con el proveedor del carrito */}

          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route 
          path="/register" 
          element={!token ? <RegisterPage /> : <Navigate to="/" />}  // Redirigir si ya está autenticado
        />
              <Route 
          path="/login" 
          element={!token ? <LoginPage /> : <Navigate to="/" />}  // Redirigir si ya está autenticado
        />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route 
          path="/profile" 
          element={token ? <Profile /> : <Navigate to="/login" />}  // Ruta protegida
        />
              <Route path="/404" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
      </CarritoProvider>
    );
  };

  export default App;
