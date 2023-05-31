import React from 'react';
import './Contatos.css'   
import Card from './Card';
import img_01 from '../img/grupo.jpeg';
import img_02 from '../img/fotoIzabella.jpeg';
import img_03 from '../img/fotoEsther.jpeg';

import { FiGithub,
  FiUsers,
  FiFigma,
  FiLinkedin,
  FiInstagram,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMail,
  FiTwitter,
  FiFacebook
} from "react-icons/fi";
{/*Importação de todos os componentes e estilos necessários para esta página*/}

const Contatos = () => {
  return (
    <section className='section'>
      <section className='first-section'>
        <div>
          <h1 className='contatos'></h1>
          <div className="card-container">
            <Card
              title={
                <>
                  <div className="title">
                    <FiPhone className='iconc1'/> <a href='https://fga.unb.br/unb-gama/contato'>
                      Ligue para nós
                      <p className='iconp1'>+55 (61) 3107-8901/ +55 (61) 3107-8907 </p> 
                    </a>
                  </div>
                  <br />

                  <div className="title">
                    <FiMapPin className='iconc1' /><a href='https://abre.ai/geFp'> Localização
                      <p className='iconp1'>St.Leste Projeção A- Gama Leste, <br />
                        Brasília-DF,72444-240</p>
                    </a>
                  </div>

                  <br />

                  <div className="title">
                    <FiClock className='iconc1'/> <a href='https://fga.unb.br/unb-gama/contato'>Horário comercial
                      <p className='iconp1'>Seg-Sex: 08 horas - 18 horas <br />
                      e 14 horas-18 horas</p>
                    </a>
                  </div>
                </>
              }
              description=""
              color="#8E4694"
            />

            <Card 
              title="Card 2" 
              description="" 
              color="#f5f5f5" 
              newTitle="Entre em Contato"
            />

            <Card 
              title="" 
              description="" 
              color="#8E4694"
              icon={
                <>
                  <div className='iconc3'>
                    <a href='https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao'>
                      <FiGithub/>
                    </a>
                  </div>
                    
                  <br />

                  <div className='iconc3'>
                    <a href='https://instagram.com/unb_oficial?igshid=MzRlODBiNWFlZA=='>
                      <FiInstagram />
                    </a>
                  </div>
                  <br />

                  <div className='iconc3'>
                    <a href='https://www.linkedin.com/school/universidade-de-bras-lia/'>
                      <FiLinkedin /> 
                    </a>
                  </div>
                  <br />
                  
                  <div className='iconc3'>
                    <a href='https://fga.unb.br/unb-gama/contato'>
                      <FiMail /> 
                    </a>
                  </div>
                  <br />
                    
                  <div className='iconc3'>
                    <a href='https://twitter.com/unb_oficial'>
                      <FiTwitter /> 
                    </a>
                  </div>
                  <br />
                      
                  <div className='iconc3'>
                    <a href='https://m.facebook.com/unbgama'>
                      <FiFacebook/>
                    </a>
                  </div>
                </>
              }
            />
          </div>
        </div>
      </section>

      <section className='second-section'>
        <h1 className='missao'>Nossa Equipe</h1>
        <div className="team-container">
          <div className="team-member">
            <div className="member-content">
            <img className="member-image" src="img/membro1.jpg" alt="Membro 1" />

<h3 className="member-name">Membro 1</h3>
<p className="member-role">Cargo do Membro 1</p>
</div>
</div>

<div className="team-member">
        <div className="member-content">
          <img className="member-image" src="img/membro2.jpg" alt="Membro 2" />
          <h3 className="member-name">Membro 2</h3>
          <p className="member-role">Cargo do Membro 2</p>
        </div>
      </div>

      <div className="team-member">
        <div className="member-content">
          <img className="member-image" src="img/membro3.jpg" alt="Membro 3" />
          <h3 className="member-name">Membro 3</h3>
          <p className="member-role">Cargo do Membro 3</p>
        </div>
      </div>
    </div>
  </section>
</section>
);
};

export default Contatos;
