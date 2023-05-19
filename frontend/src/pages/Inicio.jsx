import React from 'react';
import './Inicio.css'   
import HeartDesign from './../img/img5.png';
import img_2 from '../img/inovacao.png';
import img_3 from '../img/time.png';
import img_val from '../img/valores_1.png';
import img_com from '../img/valores_2.png';
import img_transf from '../img/valores_3.png';
import { FiGithub,
  FiFigma,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";

const Inicio = () => {
  return (
    <section className='section'>
      <section className='first-section'>
          <div>
              <h1 className='quemsomos'>Quem somos?</h1>
              <p>
                  Somos o <strong className='strong'>HUB FGA Inovação</strong>, um portal de inovação que conecta<br />
                  estudantes, professores, pesquisadores e empreendedores em uma<br />
                  plataforma que estimula o desenvolvimento de projetos inovadores<br />
                  com impacto positivo na sociedade.<br />
                  <br />
                  Oferecemos <strong className='strong'>Capacitações, Mentorias e Recursos</strong> para transformar <br />
                  ideias em projetos bem-sucedidos e acreditamos na inovação e na<br />
                  colaboração para transformar o mundo e impulsionar a economia local.<br />
              </p>
              <a href="contatos" className="btn-saiba-mais">Saiba mais</a>
          </div>
          <div class="box-img-main">
              <img className="img" src={HeartDesign} alt="logo"/>
          </div>
      </section>

      <section className='second-section'>
       <div className='coluna-1'>
        <h1 className='missao'>Missão</h1>
          <p className='p-ii'>
          A missão do <strong className='heart'>HEART</strong>  é impulsionar a transformação social e o desenvolvimento sustentável nas cidades 
          brasileiras, por meio da conexão e articulação de agentes públicos, privados e do terceiro setor. 
          Nosso objetivo é criar uma rede de troca de experiências inovadoras, reunindo boas práticas e 
          promovendo o intercâmbio de conhecimentos. Através de projetos, capacitações e parcerias 
          estratégicas, buscamos impulsionar o potencial criativo e empreendedor da comunidade acadêmica e 
          externa. Nossa visão é construir um futuro mais sustentável e resiliente, colaborando para a melhoria 
          contínua das cidades e para o bem-estar da sociedade como um todo.</p>
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
          A visão do <strong className='heart'>HEART</strong> é ser um ponto central de inovação e colaboração, conectando agentes públicos, privados e do 
          terceiro setor em uma rede dinâmica. Nossa missão é impulsionar o desenvolvimento sustentável e a transformação 
          social nas cidades brasileiras. Por meio de projetos, parcerias estratégicas e capacitações, buscamos promover 
          um futuro resiliente e próspero para todos. Com foco no potencial criativo e empreendedor da comunidade acadêmica 
          e externa, o HEART visa construir um ambiente propício para soluções inovadoras, melhorando a qualidade de vida e 
          fortalecendo a colaboração entre os diversos atores envolvidos.</p>
        </div>
      </section>

      <section className='third-section'>

        <div className="pilares">
          <h1 className='valores'>Valores</h1>
          <p className='p-iv'>Três pilares norteiam o trabalho do Ministério nesta rede de inovação</p>
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
            <img className='valores_2' src={img_com} alt='valores_2'/>
            <h1 className='valores_sub'>Comunidade e Cooperação</h1>
            <p className='p-iv_sub'>Incentivamos a integração e a cooperação entre agentes para que as inovações do Hub sejam efetivas 
              e gerem valor para as cidades, respeitando a pluralidade de pontos de vista e de modos de pensar, 
              agir e atuar perante os estudantes e a comunidade. </p>
          </div>

          <div className="Transfereia_Aplicacoes">
            <img className='valores_3' src={img_transf} alt='valores_3'/>
            <h1 className='valores_sub'>Transferênia e Aplicações</h1>
            <p className='p-iv_sub'>Estimulamos a troca de experiências que gerem valor para as cidades e para os agentes do Hub 
              de Inovação, assegurando a transparência da iniciativa e a imparcialidade na promoção das 
              melhores práticas</p>
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

export default Inicio;