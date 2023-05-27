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
} from "react-icons/fi";

const Contatos = () => {
    return (
        <section className='section'>
            <section className='first-section'>
                <div>
                    <h1 className='contatos'></h1>
                    <div className="card-container">
            <Card 
            title="Meios de contato" 
            description="" 
            color="#8E4694"
            icon={<FiPhone/>} // Adicione o ícone desejado aqui
                    />
            <Card 
            title="Card 2" 
            description= "" 
            color="#f5f5f5" 
            newTitle="Entre em Contato"/>
             
            <Card 
            title="Redes Sociais" 
            description="" 
            color="#8E4694"/>
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

            <div class="footer-basic">
                <footer>
                    <div class="social">
                      <a href="https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao">
                        <i class="icon ion-social-instagram">
                          <FiGithub/>
                        </i>
                      </a>
                      <a href="#">
                        <i class="icon ion-social-snapchat">
                          <FiLinkedin/>
                        </i>
                      </a>
                      <a href="https://www.figma.com/file/oiha0mXD5eHoqBSWUEPlPR/Heart---HUB-FGA-Inova%C3%A7%C3%A3o?type=design&node-id=0%3A1&t=7mEIQJVT3hkgRnyL-1">
                        <i class="icon ion-social-twitter">
                          <FiFigma/>
                        </i>
                      </a>
                      <a href="#">
                        <i class="icon ion-social-facebook">
                          <FiInstagram/>
                        </i>
                      </a>
                    </div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="pedei">P&D&I</a></li>
                        <li class="list-inline-item"><a href="professores">Professores</a></li>
                        <li class="list-inline-item"><a href="empresasjuniores">Empresas Juniores</a></li>
                        <li class="list-inline-item"><a href="equipesdecompetição">Equipes de Competição</a></li>
                        <li class="list-inline-item"><a href="disciplinas">Disciplinas</a></li>
                        <li class="list-inline-item"><a href="editais">Editais</a></li>
                        <li class="list-inline-item"><a href="contatos">Contatos</a></li>
                    </ul>
                    <p class="copyright">Heart - HUB FGA Inovação © 2023</p>
                </footer>
            </div>
        </section>
    );
};

export default Contatos;