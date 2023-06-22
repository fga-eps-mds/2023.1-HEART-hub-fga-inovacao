import React from 'react';
import './Inicio.css'; 
import HeartDesign from './../img/img5.png';
import img_2 from '../img/inovacao.png';
import img_3 from '../img/time.png';
import img_val from '../img/valores_1.png';
import img_com from '../img/valores_2.png';
import img_transf from '../img/valores_3.png';
import img_logo from '../img/logo-unb.png';
import img_fga from '../img/fga.png';
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
  FiDribbble
  
} from "react-icons/fi";

const Inicio = () => {
  return (
    <section className='section'>

      <section className='first-section'>
        <div className='botão'>
          <h1 className='quemsomos'>Quem somos?</h1>
          <p className='p-i'>
            Somos o <strong className='strong'> Heart - HUB FGA Inovação </strong> uma plataforma digital dedicada 
            a promover a interação e o compartilhamento de informações entre estudantes, professores e comunidade acadêmica em geral. 
            É um espaço virtual que reúne uma variedade de recursos e funcionalidades para auxiliar no desenvolvimento acadêmico 
            e profissional dos envolvidos.
          </p>
          <a href="contatos" className="btn-saiba-mais">Saiba mais</a>
        </div>
        <div class="box-img-main">
          <img className="img" src={HeartDesign} alt="logo"/>
        </div>
      </section>

      <section className='second-section-inicio'>
       <div className='coluna-1'>
        <h1 className='missao'>Missão</h1>
          <p className='p-ii'>
          A missão do <strong className='heart'>HEART</strong> é ser uma plataforma digital que visa promover a interação e o compartilhamento de informações entre estudantes, professores e a comunidade acadêmica em geral. Nosso objetivo é conectar pessoas, facilitar o diálogo e proporcionar uma experiência interativa. Queremos ser um ponto de encontro confiável e inspirador, impulsionando o crescimento acadêmico e fortalecendo as conexões na comunidade acadêmica. Junte-se a nós e faça parte dessa experiência colaborativa e enriquecedora.</p>
            <div className='box-img_time'>
              <img className="img_2" src={img_2} alt="Fga"/>
            </div>
          </div>
          <div className='coluna-2'>
            <div className="box-img_inovacao">
              <img className='img_3' src={img_3} alt='jardim'/>
            </div>
            <h1 className='visao'>Visão</h1>
          <p className='p-iii'>
          A visão do <strong className='heart'>HEART</strong> é um ponto central de conexão e colaboração, projetado para fortalecer a comunidade acadêmica 
          e impulsionar o desenvolvimento dos estudantes. Acreditamos que o compartilhamento de conhecimento, experiências e oportunidades é fundamental para 
          o crescimento acadêmico e profissional.
          Com uma variedade de recursos e seções dedicadas, nosso Hub oferece um ambiente digital dinâmico e interativo. 
          Nossa plataforma permite o acesso rápido a informações relevantes e atualizadas, bem como a interação entre estudantes, professores e demais membros 
          da comunidade acadêmica.</p>
        </div>
      </section>

      <section className='third-section'>

        <div className="pilares">
          <h1 className='valores'>Valores</h1>
          <p className='p-iv'>Três pilares norteiam o trabalho do Ministério nesta rede de inovação:</p>
        </div>

        <div className="coluna-3">

          <div className="Ensino_Pesquisa">
            <img className='valores_1' src={img_val} alt='valores_1/'/>
            <h1 className='valores_sub'>Ensino e Pesquisa</h1>
            <p className='p-iv_sub'> Ensino e Pesquisa no HEART é fundamental para
             o desenvolvimento de soluções inovadoras e o avanço do conhecimento. Através de parcerias 
             estratégicas com instituições acadêmicas e de pesquisa, buscamos promover a troca de ideias 
             e a formação de talentos capacitados. </p>
          </div>

          <div className="Comunidade_Cooperacao">
            <img className='valores_1' src={img_com} alt='valores_2'/>
            <h1 className='valores_sub'>Comunidade e Cooperação</h1>
            <p className='p-iv_sub'>Incentivamos a integração e a cooperação entre agentes para que as inovações do Hub sejam efetivas 
              e gerem valor para as cidades, respeitando a pluralidade de pontos de vista e de modos de pensar, 
              agir e atuar perante os estudantes e a comunidade. </p>
          </div>

          <div className="Transfereia_Aplicacoes">
            <img className='valores_1' src={img_transf} alt='valores_3'/>
            <h1 className='valores_sub'>Transferênia e Aplicações</h1>
            <p className='p-iv_sub'>Estimulamos a troca de experiências que gerem valor para as cidades e para os agentes do Hub 
              de Inovação, assegurando a transparência da iniciativa e a imparcialidade na promoção das 
              melhores práticas</p>
          </div>
        </div>

      </section>
      
      <section className='fourth-section'>
        <div className='bloco-titulo'>
          <h1 className='unb-titulo'>UnB: O lugar certo para empreender e inovar</h1>
          <p className='historia-titulo'>A <strong className='strong'>Universidade de Brasília</strong> é uma instituição pública de ensino superior localizada na capital do Brasil. Conhecida por sua excelência acadêmica, a UnB oferece uma ampla variedade de cursos de graduação e pós-graduação nas áreas de humanidades, ciências exatas, biológicas e da saúde. Além de seu prestígio acadêmico, a universidade destaca-se pela produção científica, compromisso com a sustentabilidade ambiental e contribuição para o desenvolvimento econômico e social do país. A UnB desempenha um papel importante no avanço do conhecimento e da ciência no Brasil, sendo uma instituição de grande relevância para o país.</p>
        </div>
        <div className='blocos'>
          <div>
            <ul className='bloco1'>
              <li className='li-b1'>
                <a className='a-b1' href="pedei"><FiCpu/> P&D&I</a> 
                <p className='p-b1'>Conheça as diversas iniciativas para o estimulo da pesquisa e inovação na FGA</p>
              </li>
              <li className='li-b1'>
                <a className='a-b1' href="professores"><FiUsers/> Professores</a> 
                <p className='p-b1'>Consulte os pesquisadores e grupos de pesquisa da FGA</p>
              </li>
              <li className='li-b1' >
                <a className='a-b1' href="empresasjuniores"><FiBriefcase/> Empresas</a>
                <p className='p-b1'>Conheça as empresas criadas por iniciativas de alunos e ex alunos da FGA</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className='bloco2'>
              <li className='li-b2'>
                <a className='a-b2' href="equipesdecompetição"><FiDribbble/> Equipes de Competição.</a>
                <p className='p-b2'>Tenha acesso a todas as equipes de competição da FGA</p>
              </li>
              <li className='li-b2'>
                <a className='a-b2' href="disciplinas"><FiAward/> Premiações</a>
                <p className='p-b2'>Fique por dentro de algumas das premiações que nosso campus já recebeu</p>
              </li>
              <li className='li-b2'>
                <a className='a-b2' href="editais"><FiCalendar/> Editais</a>
                <p className='p-b2'>Tenha acesso a todos os editais referentes ao nosso campus bem como algumas páginas de apoio ligadas a FGA direta ou indiretamente</p>
              </li>
            </ul> 
          </div>
        </div>
      </section> 

      <section>
      <div className="footer-basic">
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
      
    </section>
  );
};

export default Inicio;
