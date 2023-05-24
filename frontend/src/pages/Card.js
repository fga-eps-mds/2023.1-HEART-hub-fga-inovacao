import React, { useState } from 'react';

const Card = ({ title, description, color, newTitle }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    backgroundColor: color,
  };

  const cardClassName = `card ${isHovered ? 'hovered' : ''}`;

  return (
    <div
      className={cardClassName}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-content">
        <h2>{newTitle ? newTitle: title}</h2>
        <p>{description}</p>
        {/* Adicione aqui o conteúdo adicional do card, se necessário */}
        {newTitle === "Entre em Contato" && (
          <div className="card-inputs">
            <input className="card-input" type="text" placeholder="Nome" />
            <input className="card-input" type="text" placeholder="E-mail" />
            <input className="card-input" type="text" placeholder="Telefone" />
            <input className="card-input" type="text" placeholder="Assunto" />
            <input className="card-input" type="text" placeholder="Mensagem" />
            <button className="card-button">Enviar Mensagem</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

