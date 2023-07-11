import React, { useEffect, useState, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './EquipesdeCompeticao.css';
import img_logo from '../img/logo-unb.png';
import img_fga from '../img/fga.png';
import { FiInstagram,
  FiLink,
  FiGithub,
  FiFigma,
  FiLinkedin,
} from "react-icons/fi";

const EquipesdeCompeticao = () => {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('https://api.npoint.io/421d6b318180149b53e9')
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

      <section className='first-section-equipes'>
        <div className='div-equipes'>
          <h1 className='equipes'>
            Equipes de Competição
          </h1>
          <p className='p-equipes'>
          Nesta página, você descobrirá as <strong className='strong-equipes'>Equipes de Competição</strong> da FGA UnB, grupos de estudantes apaixonados por desafios tecnológicos. Conheça as diferentes áreas de atuação dessas equipes, como robótica, engenharia de software e aerodesign. Saiba mais sobre os projetos desenvolvidos, competições participadas e conquistas alcançadas. Além disso, você encontrará informações sobre como fazer parte dessas equipes ou como patrociná-las.
          </p>
        </div>
      </section>

      <section className="swiper-wrapper" ref={carousel}>
        {data.map((item, index) => {
          const { logo, nome, slogan, link, descricao, instagram } = item;
          return (
            <div className="card swiper-slide" key={index}>
              <div className="card__image">
                <img src={logo} alt={nome} className='img-empresas'/>
              </div>
              <div className="card__content">
                <span className="card__name-edc">{nome}</span>
                <span className="card__slogan-edc">{slogan}</span>
                <p className="card__text-edc">{descricao}</p>
                <div className='icones-edc'>
                  <a className="card__link-edc" href={link}><FiLink/></a>
                  <a className="card__insta-edc" href={instagram}><FiInstagram/></a>
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
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/pedei">P&D&I</a></li>
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/professores">Professores</a></li>
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/empresasjuniores">Empresas Juniores</a></li>
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/equipesdecompetição">Equipes de Competição</a></li>
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/premiações">Premiações</a></li>
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/editais">Editais</a></li>
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/contatos">Contatos</a></li>
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

export default EquipesdeCompeticao;