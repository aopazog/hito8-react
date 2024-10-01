import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardPizza from '../components/CardPizza';
const Pizza = () => {
  const [datos, setDatos] = useState(null); // Inicializar como null o un objeto vacío
  const { id } = useParams();  // Obtener el id de la URL
  useEffect(() => {
    const consultarApi = async () => {
      try {
        const url = `http://localhost:5000/api/pizzas/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setDatos(data);
        console.log(data); // Cambié `datos` a `data` para evitar la referencia a un estado no actualizado
      } catch (error) {
        console.error('Error fetching pizza data:', error);
      }
    };

    consultarApi();
  }, [id]);

  // Verificar que los datos estén cargados antes de renderizar
  if (!datos) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center ">
    <div>
      {/* Reutilizamos el componente CardPizza con showDetails en true */}
      <CardPizza pizza={datos}  />
    </div>
    </div>
  );
}

export default Pizza;