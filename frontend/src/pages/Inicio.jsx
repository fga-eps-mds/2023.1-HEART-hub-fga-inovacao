import React from 'react';
import styles from './inicio.css'

const Inicio = () => {
    return (
        <section className="home_container">
            <h1 className="home_containerh1">Quem nos somos</h1>
            <p className="home_container_p"> Somos um HUB Digital de inovação que conecta estudantes, professores, pesquisadores e empreendedores em uma plataforma que estimula o desenvolvimento de projetos inovadores com impacto positivo na sociedade. Oferecemos capacitações, mentorias e recursos para transformar ideias em projetos bem-sucedidos e acreditamos na inovação e colaboração para transformar o mundo e impulsionar a economia local.</p>
            <button className="button">Saiba mais</button>
        </section>
    );
};

export default Inicio;