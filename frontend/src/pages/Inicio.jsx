import React from 'react';
import './Inicio.css'   
import HeartDesign from './../img/img5.png';
import { FiGithub,
  FiFigma,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";
import { FiUsers,
  FiAward,
  FiCalendar,
  FiBookOpen,
  FiCpu,
  FiBriefcase,
} from "react-icons/fi";

const Inicio = () => {
  return (
    <section className='section'>
      <section className='first-section'>
          <div>
              <h1 className='quemsomos'>Quem somos?</h1>
              <p className='p-i'>
                  Somos o <strong className='strong'>HUB FGA Inovação</strong>, um portal de inovação que conecta 
                  estudantes, professores, pesquisadores e empreendedores em uma 
                  plataforma que estimula o desenvolvimento de projetos inovadores 
                  com impacto positivo na sociedade.
                  Oferecemos <strong className='strong'>Capacitações, Mentorias e Recursos</strong> para transformar  
                  ideias em projetos bem-sucedidos e acreditamos na inovação e na 
                  colaboração para transformar o mundo e impulsionar a economia local. 
              </p>
              <a href="contatos" className="btn-saiba-mais">Saiba mais</a>
          </div>
          <div class="box-img-main">
              <img className="img" src={HeartDesign} alt="logo"/>
          </div>
      </section>
      <section className='second-section'>
        <div>

        </div>
        <div>

        </div>
      </section>
      <div className='aux'>
        <h1 className='unb'>UnB: O lugar certo para empreender e inovar</h1>
        <p className='p-i2'>A Universidade de Brasília (UnB) é uma instituição pública de ensino superior brasileira, localizada na capital do país, Brasília. A universidade é reconhecida por sua excelência acadêmica e possui uma ampla gama de cursos de graduação e pós-graduação nas áreas de humanidades, ciências exatas, biológicas e da saúde.Além dessas qualidades, a UnB é também conhecida por sua relevância na produção científica, seu compromisso com a sustentabilidade ambiental e sua contribuição para o desenvolvimento econômico e social do Brasil. A Universidade de Brasília é, portanto, uma instituição de grande importância para o país e um símbolo do avanço do conhecimento e da ciência no Brasil.</p> 
      </div> 
      <section className='third-section'>
        <div>
          <ul className='bloco1'>
            <li><FiCpu/> 
              <a href="pedei">P&D&I</a> 
              <p>Conheça as diversas iniciativas de pesquisa,desenvolvimento e inovação da UnB</p>
            </li>
            <li><FiUsers/> 
              <a href="professores">Professores</a> 
              <p>Consulte os pesquisadores e grupos de pesquisa da UnB por suas aréas de competência e habilidades</p>
            </li>
            <li><FiBriefcase/> 
              <a href="empresasjuniores">Empresas Juniores</a>
              <p>Conheça as empresas Juniores criadas por iniciativas de alunos e ex alunos da UnB</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className='bloco2'>
            <li><FiAward/>
              <a href="equipesdecompetição">Equipes de Competição</a>
              <p>Conheça as equipes de competição criadas por iniciativas de alunos e ex alunos da UnB</p>
            </li>
            <li><FiBookOpen/>
              <a href="disciplinas">Disciplinas</a>
              <p>Fique por dentro de tudo que está rolando na UnB através dos editais abertos</p>
            </li>
            <li><FiCalendar/>
              <a href="editais">Editais</a>
              <p>Tenha acesso aos editais e fique por dentro de tudo que está rolando na nossa UnB</p>
            </li>
          </ul> 
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

export default Inicio;