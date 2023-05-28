import React from 'react';
import './Contatos.css'   
import Card from './Card';
import img_01 from '../img/grupo.jpeg';

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
{/*Definição do componente contatos, aqui ele está retornando a estrutura da pagina*/}

          <Card
              title={
                <>
                  <div className="title">
                  <FiPhone className='iconc1'/> <a href='https://fga.unb.br/unb-gama/contato'>
                  Ligue para nós
                    <p className='iconp1'>+55 (61) 3107-8901/ +55 (61) 3107-8907 </p> 
                  </a>
                  </div>
                  <br></br>

                  <div className="title">
                   <FiMapPin  className='iconc1' /><a href='https://abre.ai/geFp'> Localização
                    <p className='iconp1'>St.Leste Projeção A- Gama Leste, <br></br>
                      Brasília-DF,72444-240</p>
                      </a>
                  </div>

                  <br></br>

                  <div className="title">
                  <FiClock className='iconc1'/> <a href='https://fga.unb.br/unb-gama/contato'>Horário comercial
                    <p className='iconp1'>Seg-Sex: 10 horas - 18 horas</p>
                    </a>
                  </div>
                </>
              }
              description=""
              color="#8E4694"
              />
{/*Acima temos o primeiro componente card criado, que tem as propriedades de
titulo,descrção e cor, nesse card temos, cada secção tem um icone, um link e 
um parágrafo de texto descritivo*/}

            <Card 
              title="Card 2" 
              description="" 
              color="#f5f5f5" 
              newTitle="Entre em Contato"
            />
{/*Acima temos o segundo componete, que é o card do meio, a função dele é conter
o formulário para envio de mensagens para o site */}

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
                    
                  <br></br>

                  <div className='iconc3'>
                    <a href='https://instagram.com/unb_oficial?igshid=MzRlODBiNWFlZA=='>
                    <FiInstagram />
                    </a>
                  </div>
                  <br></br>

                  <div className='iconc3'>
                    <a href='https://www.linkedin.com/school/universidade-de-bras-lia/'>
                    <FiLinkedin /> 
                    </a>
                  </div>
                  <br></br>
                  
                  <div className='iconc3'>
                    <a href='https://fga.unb.br/unb-gama/contato'>
                    <FiMail /> 
                    </a>
                  </div>
                  <br></br>
                    
                  <div className='iconc3'>
                    <a href='https://twitter.com/unb_oficial'>
                    <FiTwitter /> 
                    </a>
                  </div>
                  <br></br>
                      
                  <div className='iconc3'>
                    <a href='https://m.facebook.com/unbgama'>
                    <FiFacebook/>
                    </a>
                  </div>
                </>
              }
            />
{/*Acima temos o terceiro e ultimo card desta secção que tem varios icones 
renderizados como links clicaveis, cada icone representa um link para uma
rede social diferente*/}

          </div>
        </div>
      </section>
  

            <section className='second-section'>
            <h1 className='missao'>Nossa Equipe</h1>

            <div class="team-container">
          <div class="team-member">
          <div class="member-content">
          <img className="img_01" src={img_01} alt="contato"/>
          <div class="member-details">
            <h3>Esther Sena</h3>
            <div class="social-media">
            <a href="https://www.linkedin.com/in/esther-sena-martins-003b021b3/"><i className="fab fa-linkedin"><FiLinkedin/></i></a>
              <a href="https://br.sonychannel.com/home" ><i className="fab fa-linkedin"><FiUsers/></i></a>
              <a href="https://github.com/esmsena" target="_blank"> <i className="fab fa-github"><FiGithub/></i></a>
            </div>
            </div>
          </div>
          </div>

          <div class="team-member">
          <div class="member-content">
          <img className="img_01" src={img_01} alt="contato"/>
          <div class="member-details">
            <h3>Mariiana Siqueira</h3>
            <div class="social-media">
              <a href="https://br.linkedin.com/"><i className="fab fa-linkedin"><FiLinkedin/></i></a>
              <a href="https://br.sonychannel.com/home" ><i className="fab fa-linkedin"><FiUsers/></i></a>
              <a href="https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao" target="_blank"> <i className="fab fa-github"><FiGithub/></i></a>
            </div>
            </div>
          </div>
          </div>

                  <div class="team-member">
          <div class="member-content">
          <img className="img_01" src={img_01} alt="contato"/>
          <div class="member-details">
            <h3>Izabella Alves</h3>
            <div class="social-media">
              <a href="https://br.linkedin.com/"><i className="fab fa-linkedin"><FiLinkedin/></i></a>
              <a href="https://br.sonychannel.com/home" ><i className="fab fa-linkedin"><FiUsers/></i></a>
              <a href="https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao" target="_blank"> <i className="fab fa-github"><FiGithub/></i></a>
            </div>
            </div>
          </div>
          </div>


                  <div class="team-member">
          <div class="member-content">
          <img className="img_01" src={img_01} alt="contato"/>
          <div class="member-details">
            <h3>Artur Ricardo Silva</h3>
            <div class="social-media">
              <a href="https://br.linkedin.com/"><i className="fab fa-linkedin"><FiLinkedin/></i></a>
              <a href="https://br.sonychannel.com/home" ><i className="fab fa-linkedin"><FiUsers/></i></a>
              <a href="https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao" target="_blank"> <i className="fab fa-github"><FiGithub/></i></a>
            </div>
            </div>
          </div>
          </div>

                  <div class="team-member">
          <div class="member-content">
          <img className="img_01" src={img_01} alt="contato"/>
          <div class="member-details">
            <h3>Lucas Oliveira</h3>
            <div class="social-media">
              <a href="https://br.linkedin.com/"><i className="fab fa-linkedin"><FiLinkedin/></i></a>
              <a href="https://br.sonychannel.com/home" ><i className="fab fa-linkedin"><FiUsers/></i></a>
              <a href="https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao" target="_blank"> <i className="fab fa-github"><FiGithub/></i></a>
            </div>
            </div>
          </div>
          </div>

                  <div class="team-member">
          <div class="member-content">
          <img className="img_01" src={img_01} alt="contato"/>
          <div class="member-details">
            <h3>Lucas Ribeiro</h3>
            <div class="social-media">
              <a href="https://br.linkedin.com/"><i className="linkedin"><FiLinkedin/></i></a>
              <a href="https://br.sonychannel.com/home" ><i className="linkedin"><FiUsers/></i></a>
              <a href="https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao" target="_blank"> <i className="fab fa-github"><FiGithub/></i></a>
            </div>
            </div>
          </div>
          </div>

          <div class="team-member">
          <div class="member-content">
          <img className="img_01" src={img_01} alt="contato"/>
          <div class="member-details">
            <h3>Lucas Victor Ferreira</h3>
            <div class="social-media">
              <a href="https://br.linkedin.com/"><i className="fab fa-linkedin"><FiLinkedin/></i></a>
              <a href="https://br.sonychannel.com/home" ><i className="fab fa-linkedin"><FiUsers/></i></a>
              <a href="https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao" target="_blank"> <i className="fab fa-github"><FiGithub/></i></a>
            </div>
            </div>
          </div>
          </div>
        
  </div>


            </section>
            
          

            
    </section>
    );
  };

export default Contatos;