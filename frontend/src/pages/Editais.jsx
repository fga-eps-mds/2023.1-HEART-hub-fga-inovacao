import React, { useState, useEffect } from 'react';
import styles from './Editais.css'   
import img_pas from '../img/pas.png';
import img_enem from '../img/enem.png';
import vestibular from '../img/vestibular.png';
import img_tf from '../img/tf.png';
import img_libras from '../img/libra.png';
import img_1 from '../img/img-ed.png'
import { FiGithub,
  FaFileAlt,
  FiLink,
  FiHand,
  FiFigma,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";
import { TbHandStop } from "react-icons/tb";



const Editais = () => {
  const [editaisData, setEditaisData] = useState([]);
  useEffect(() => {
      fetch('https://api.npoint.io/8201418ef1b7ce995d3b')
        .then((response) => response.json())
        .then((data) => setEditaisData(data));
    }, []);

    return (
      
        <section className='section'>
            <section className='first-section'>
                <div>
                    <h1 className='editais'>Editais</h1>
                    <p className='p-edi'>
                        Na aba de <strong className="strong">Editais</strong> você pode encontrar informações sobre os editais da FGA, que são oportunidades 
                        para professores, pesquisadores, estudantes e empresas interessados em colaborar com a instituição em 
                        projetos de pesquisa, inovação, empreendedorismo e extensão. Os editais da FGA são elaborados com base 
                        nas demandas do mercado e nas políticas de fomento à ciência, tecnologia e inovação. Além disso, os editais
                        são abertos periodicamente e podem abranger diversas áreas do conhecimento.
                    </p>
                </div>
                <div>
                  <img className='img_1' src={img_1} alt="edital" />
                </div>
            </section>

            <section className='second-section'>
              <div className='div-editais'>
                <h1 className='editais'>Editais da UnB</h1>
              </div>
              <div className='card-grid-ed'>
                {editaisData.map((item, index) => {
                  const { logo, nome, descricao, ano, edital, libras } = item;
                  return (
                    <div className="card_editais" key={index}>
                      <img className='img_pas' src={logo} alt="Card Image" />
                      <h1 className='titulo-pas'>{nome}</h1>
                      <div className='scrollable-text'>
                        <p className='descricao_pas'>
                          {descricao}
                        </p>
                      </div>
                      <h1 className='titulo-pas'>Ano do Edital:</h1>
                      <div className='label-editais'>
                        <p>{ano}</p>
                      </div>
                      <div className='button_editais'>
                        <a href={edital} className='button-edital-1'>Edital</a>
                        <a href={libras} className='button-edital-1'>
                          <TbHandStop />
                          <TbHandStop className='mao-virada' />
                        </a>
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

export default Editais;