import React from 'react';
import './Pedei.css';
import img_logo from '../img/logo-unb.png';
import img_fga from '../img/fga.png';      
import { FiGithub,
  FiFigma,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";

const Pedei = () => {
    return (
        <section className='section'>
            <section className='first-section'>
                <div className='div-p'>
                    <h1 className='pedei'>P&D&I</h1>
                    <p className='p-p'>
                        A <strong className='strong'>FGA</strong> é uma instituição que busca promover a inovação e o empreendedorismo, 
                        estabelecendo uma conexão entre o ambiente acadêmico, as organizações e a sociedade. 
                        Para alcançar esse objetivo, a FGA mantém diversas iniciativas e programas disponíveis para
                        facilitar e estimular o desenvolvimento de ideias e soluções que tragam benefícios para a
                        sociedade.
                    </p>
                </div>
            </section>
            <section className='second-section'>
        
            </section>
            <section className='third-section'>
        
            </section>
            <div class="footer-basic">
            <footer>
            <div className="social">
              <a href="https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao">
                <i className="icon ion-social-instagram">
                  <FiGithub/>
                </i>
              </a>
              <a href="#">
                <i className="icon ion-social-snapchat">
                  <FiLinkedin/>
                </i>
              </a>
              <a href="https://www.figma.com/file/oiha0mXD5eHoqBSWUEPlPR/Heart---HUB-FGA-Inova%C3%A7%C3%A3o?type=design&node-id=0%3A1&t=7mEIQJVT3hkgRnyL-1">
                <i className="icon ion-social-twitter">
                  <FiFigma/>
                </i>
              </a>
              <a href="#">
                <i className="icon ion-social-facebook">
                  <FiInstagram/>
                </i>
              </a>
            <p className='texto_footer'>Este HUB é referente à Universidade de Brasília - Campus Gama</p>
            </div>
              <ul className="list-inline">
                <li className="list-inline-item"><a href="pedei">P&D&I</a></li>
                <li className="list-inline-item"><a href="professores">Professores</a></li>
                <li className="list-inline-item"><a href="empresasjuniores">Empresas Juniores</a></li>
                <li className="list-inline-item"><a href="equipesdecompetição">Equipes de Competição</a></li>
                <li className="list-inline-item"><a href="disciplinas">Disciplinas</a></li>
                <li className="list-inline-item"><a href="editais">Editais</a></li>
                <li className="list-inline-item"><a href="contatos">Contatos</a></li>
              </ul>
            <p className="copyright">Heart - HUB FGA Inovação © 2023</p>
            <div className='logo_unb'>
            <a href="https://www.unb.br/">
              <img className="img_logo" src={img_logo} alt="logo"/>
            </a>
            <a href="https://fga.unb.br/">
              <img className='fga' src={img_fga} alt='fga'/>
            </a>
            </div>
          </footer>
            </div>
        </section>
    );
};

export default Pedei;