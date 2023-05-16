import React from 'react';
import './Editais.css'   
import { FiGithub,
  FiFigma,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";

const Editais = () => {
    return (
        <section className='section'>
            <section className='first-section'>
                <div>
                    <h1 className='editais'>Editais</h1>
                    <p>
                        Na aba de <strong className="strong">Editais</strong> você pode encontrar informações sobre os editais da FGA, que são oportunidades<br /> 
                        para professores, pesquisadores, estudantes e empresas interessados em colaborar com a instituição em<br /> 
                        projetos de pesquisa, inovação, empreendedorismo e extensão. Os editais da FGA são elaborados com base<br /> 
                        nas demandas do mercado e nas políticas de fomento à ciência, tecnologia e inovação. Além disso, os editais<br />
                        são abertos periodicamente e podem abranger diversas áreas do conhecimento.
                    </p>
                </div>
            </section>
            <section className='second-section'>
        
            </section>
            <section className='third-section'>
        
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

export default Editais;