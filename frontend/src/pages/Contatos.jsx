import React, { useState, useEffect } from 'react';
import './Contatos.css'   

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
  FiFacebook,
  FiFile
} from "react-icons/fi";

const Contatos = () => {
  const [contatosData, setContatosData] = useState([]);
  useEffect(() => {
      fetch('http://localhost:3000/2023.1-HEART-hub-fga-inovacao/static/Contatos.json')
        .then((response) => response.json())
        .then((data) => setContatosData(data));
    }, []);

    return (
    <section className='section'>

      <section className='first-section'>
        <div className='card-informações-contatos'>
          <div className='Telefone'>
            <FiPhone className='sub_titulo_card-icon'/><h1><a className='titulo_card' href="https://fga.unb.br/unb-gama/contato">LIGUE PARA NÓS</a></h1>
          </div>
          <h2 className='sub_titulo_card'>+55 (61) 98162-2021 / +55 (61) 99341-1334 </h2>
          <div className='Telefone'>
            <FiMapPin className='sub_titulo_card-icon'/><h1><a className='titulo_card' href="https://abre.ai/geFp">LOCALIZAÇÃO</a></h1>
          </div>
          <h2 className='sub_titulo_card'>St. Leste Projeção A - Gama Leste, Brasília - DF, 72444-240</h2>
          <div className='Telefone'>
            <FiClock className='sub_titulo_card-icon'/><h1><a className='titulo_card' href="https://fga.unb.br/unb-gama/contato">HORÁRIO COMERCIAL</a></h1>
          </div>
          <h2 className='sub_titulo_card'>Seg - Sex: 10 horas - 18 horas</h2>
        </div>

        <div className='card-mensagem-contatos'>
          <h1 className='titulo_card-2'>Entre em contato</h1>
          <form className='formulario'>
            <div className="form-group-1">
              <label htmlFor="nome" className="label"></label>
              <input id="nome" type="nome" className="input" placeholder="Nome" />
              <label htmlFor="email" className="label"></label>
              <input id="email" type="email" className="input" placeholder="E-mail" />
            </div>
            <div className="form-group-1">
              <label htmlFor="telefone" className="label"></label>
              <input id="telefone" type="tel" className="input" placeholder="Telefone"/>
              <label htmlFor="assunto" className="label"></label>
              <input id="assunto" type="text" className="input" placeholder="Assunto"/>
            </div>
            <div className="form-group">
              <label htmlFor="mensagem" className="sub_titulo_card-2"><h2>Mensagem:</h2></label>
              <textarea id="mensagem" className="input mensagem-input" placeholder="Digite sua mensagem..."></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensagem</button>
          </form>
        </div>

        <div className='card-rede-socias-contato'>
          <div className='card-icon-social-contatos'>
            <a className='titulocontatos' href='https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao'><FiGithub className='color-icon'/></a>
            <a className='titulocontatos' href='https://instagram.com/unb_oficial?igshid=MzRlODBiNWFlZA=='><FiInstagram className='color-icon'/></a>
            <a className='titulocontatos' href='https://www.linkedin.com/school/universidade-de-bras-lia/'><FiLinkedin className='color-icon'/></a>
            <a className='titulocontatos' href='https://fga.unb.br/unb-gama/contato'><FiMail className='color-icon'/></a>
            <a className='titulocontatos' href='https://twitter.com/unb_oficial'><FiTwitter className='color-icon'/></a>
            <a className='titulocontatos' href='https://m.facebook.com/unbgama'><FiFacebook className='color-icon'/></a>                    
          </div>
        </div>
      </section>

      <section className='second-section'>
        <div className='titiulo_contatos'>
          <h1>Nossa Equipe</h1>
        </div>
        <div className='card_contatos'>
          {contatosData.map((item, index) => {
            const { foto, nome, linkdin, função, github, gitpage, email } = item;
            return (
              <div className='card-grid-contatos' key={index}>
                <img className='foto_contatos' src={foto} alt="imagem grupo" />
                <h1 className='nome_contatos'>{nome}</h1>
                <h2 className='curso'>{função}</h2>
                <div className='icons-contatos_sec-2'>
                  <a href={linkdin}><FiLinkedin /></a>
                  <a href={github}><FiGithub /></a>
                  <a href={email}><FiMail /></a>
                  <a href={gitpage}><FiFile /></a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div class="footer-basic">
                <footer>
                    <div class="social">
                      <br/>
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
