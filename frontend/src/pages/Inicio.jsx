import React from 'react';
import './inicio.css'   
import HeartDesign from './../img/HeartDesign.png';

const Inicio = () => {
    return (
        <section>
            <section className='home_container'>
                <h1>HUB FGA Inovação</h1>
                <div>
                    <p>
                        Somos um HUB Digital de inovação que conecta estudantes, professores,
                        pesquisadores e empreendedores em uma plataforma que estimula o
                        desenvolvimento de projetos inovadores com impacto positivo na sociedade.
                        Oferecemos capacitações, mentorias e recursos para transformar ideias em
                        projetos bem-sucedidos e acreditamos na inovação e colaboração para
                        transformar o mundo e impulsionar a economia local.
                    </p>
                    <img src={HeartDesign} alt="logo" />
                </div>
                <button className="btn_saibamais">Saiba mais</button>
            </section>
        </section>
    );
};

export default Inicio;