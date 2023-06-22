import React, { useEffect, useState, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './EmpresasJuniores.css';
import img_logo from '../img/logo-unb.png';
import img_fga from '../img/fga.png';
import { FiInstagram,
  FiLink,
  FiGithub,
  FiFigma,
  FiLinkedin,
} from "react-icons/fi";

const EmpresasJuniores = () => {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('https://api.npoint.io/732cc9f14d87bfc496d0')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    if (data && data.length) {

      const swiper = new Swiper('.mySwiper', {
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    }
  }, [data]);

  if (!data || !data.length) return null;

  return (

    <section className="swiper mySwiper">

      <section className='first-section-empresas'>
        <div className='div-empresas'>
          <h1 className='empresas'>
            Empresas Juniores
          </h1>
          <p className='p-empresas'>
            Nesta página, você vai explorar o ecossistema das <strong className='strong-empresas'>Empresas Juniores</strong> na FGA UnB. Conheça essas organizações geridas por estudantes que oferecem serviços de consultoria de alta qualidade para empresas e empreendedores. Descubra as áreas de atuação de cada Empresa Júnior, os projetos já realizados e como você pode se envolver, seja como membro ou buscando apoio para o seu próprio negócio.
          </p>
        </div>
      </section>

      <section className="swiper-wrapper" ref={carousel}>
        {data.map((item, index) => {
          const { logo, nome, engenharia ,link, descricao, instagram } = item;
          return (
            <div className="card swiper-slide" key={index}>
              <div className="card__image">
                <img src={logo} alt={nome} className='img-empresas'/>
              </div>
              <div className="card__content">
                <span className="card__name-ej">{nome}</span>
                <span className="card__eng-ej">{engenharia}</span>
                <p className="card__text-ej">{descricao}</p>
                <div className='icones-ej'>
                  <a className="card__link-ej" href={link}><FiLink/></a>
                  <a className="card__insta-ej" href={instagram}><FiInstagram/></a>
                </div>
              </div>
            </div>
          );
        })}
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
                <li className="list-inline-item"><a href="premiacoes">Premiações</a></li>
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
      
      <div className="swiper-pagination"></div>

    </section>
  );
};

export default EmpresasJuniores;