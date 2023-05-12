import React from 'react';
import img5 from './../img/img5.png';
import './Sec1.css'


const Sec1 = () => {

  return (
    <section className="home_container">
      <h1>Quem somos</h1>
      <p>
        Somos um HUB Digital de inovação que conecta estudantes, professores,
        pesquisadores e empreendedores em uma plataforma que estimula o
        desenvolvimento de projetos inovadores com impacto positivo na sociedade.
        Oferecemos capacitações, mentorias e recursos para transformar ideias em
        projetos bem-sucedidos e acreditamos na inovação e colaboração para
        transformar o mundo e impulsionar a economia local.
      </p>
      <button className="button">Saiba mais</button>
      <div className='img5'>
        <img src={img5} alt="logo" />
      </div>
    </section>
  );
};
    
export default Sec1; 
  
