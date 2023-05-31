import React, { useState } from 'react';

const Card = ({ title, description, color, newTitle,icon }) => {
  const [isHovered, setIsHovered] = useState(false);
{/*Acima definimos o componente card como uma função do componente react
que está recebendo as propriedades de titulo,descrição e etc, importamos 
o useState, que é uma função que retorna uma array com dois elementos */}

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
{/*Acima definimos duas funções que vão ser chamadas quando o mouse entra e
sai dos cards, respectivamente */}

  const cardStyle = {
    backgroundColor: color,
  };

  const cardClassName = `card ${isHovered ? 'hovered' : ''}`;
{/*Acima definimos o objeto cardStyle que contém a propriedade de cor. Em seguida, 
definimos a classe CSS do elemento Card com base no estado isHovered.Se isHovered 
for verdadeiro, adicionamos a classe CSS 'hovered' à classe cardClassName,caso con-
trario, a classe cardClassName será apenas 'card'. */}

  return (
    <div
      className={cardClassName}
      style={cardStyle}
      
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

    >
      <div className="card-content">
        {icon} {/* Renderiza o ícone aqui */}
        <h2>{newTitle ? newTitle: title}</h2>
        <p>{description}</p>
        {/* Adicione aqui o conteúdo adicional do card, se necessário */}
        {newTitle === "Entre em Contato" && (
          <div className="card-inputs">
            <input className="card-input" type="text" placeholder="Nome" />
            <input className="card-input" type="email" placeholder="E-mail" />
            <input className="card-input" type="number" placeholder="Telefone" />
            <input className="card-input" type="text" placeholder="Assunto" />
            <textarea
              className="card-input card-textarea"
              rows={3} // Definir o número de linhas desejado
              placeholder="Mensagem"
            />
            <button className="card-button">Enviar mensagem</button>
          </div>
        )}
      </div>
    </div>
  );
};

{/*Acima retornamos a estrutura do componente card.O elemento div principal recebe 
a classe cardClassName e o estilo cardStyle, também adicionamos dois eventos para 
lidar com as alterações de estado do hover. Dentro do elemento div com a classe
card-content, renderizamos o icone recebido, exibimos o titulo("NewTitle" se esti-
ver definido, se nã usamos "title") e se New title for igual a "ente em contato"
renderizamos um formulário de contato*/}

export default Card;
