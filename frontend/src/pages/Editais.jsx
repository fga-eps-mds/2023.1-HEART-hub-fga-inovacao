import React, { useState, useEffect } from 'react';
import styles from './Editais.css'   
import img_pas from '../img/pas.jpg';
import { FiGithub,
  FiLink,
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
                    <p className='p-edi'>
                        Na aba de <strong className="strong">Editais</strong> você pode encontrar informações sobre os editais da FGA, que são oportunidades 
                        para professores, pesquisadores, estudantes e empresas interessados em colaborar com a instituição em 
                        projetos de pesquisa, inovação, empreendedorismo e extensão. Os editais da FGA são elaborados com base 
                        nas demandas do mercado e nas políticas de fomento à ciência, tecnologia e inovação. Além disso, os editais
                        são abertos periodicamente e podem abranger diversas áreas do conhecimento.
                    </p>
                </div>
            </section>
            <section className='second-section'>
            <div className="card_editais">
              <img className='img_pas' src={img_pas} alt="Card Image" />
              <h1 className='titulo-pas'>ACESSO PAS - UnB</h1>
              <div className='scrollable-text'>
              <p className='descricao_pas'>O Programa de Avaliação Seriada (PAS) é um processo seletivo da Universidade de Brasília (UnB), 
                realizado ao longo dos três anos do ensino médio regular. Atualmente, a Universidade destina a 
                metade das vagas em todos os seus cursos aos aprovados no Programa, abrindo as portas da Instituição 
                para os estudantes do ensino médio de forma gradual e progressiva.</p>
              </div>
                <h2>Ano do edital:</h2> 
                <p>"Subprograma 2022-2024"</p>
                <h2>Edital:</h2>
                <p></p>
              <button><a href="#">Botão</a></button> 
            </div>
            
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