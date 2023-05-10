import React, { useState, useEffect } from 'react';

const Empresas = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await fetch('./empresas.json');
        const data = await response.json();
        if (Array.isArray(data.empresas)) {
          setEmpresas(data.empresas);
        } else {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmpresas();
  }, []);

  return (
    <div>
      <h2>Lista de empresas:</h2>
      <ul>
        {empresas.map((empresa, index) => (
          <li key={index}>
            <h3>{empresa.nome}</h3>
            <p>{empresa.descricao}</p>
            <p>{empresa.instagram}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Empresas;
