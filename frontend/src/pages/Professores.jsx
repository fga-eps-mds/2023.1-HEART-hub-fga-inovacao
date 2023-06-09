import React, { useEffect, useState, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './Professores.css';
import { FiInstagram,
  FiLink,
  FiGithub,
  FiFigma,
  FiLinkedin,
} from "react-icons/fi";

const Professores = () => {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('https://api.npoint.io/9ea98043cb263c676a90')
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

      <section className='first-section-professores'>
        <div className='div-professores'>
          <h1 className='empresas'>
            Professores
          </h1>
          <p className='p-professores'>
          Nesta página, você conhecerá nossos <strong className='strong-professores'>Professores</strong> especializados e engajados em promover a inovação. Saiba mais sobre suas áreas de atuação, projetos de pesquisa e experiência acadêmica. Descubra como entrar em contato e colaborar com os professores da FGA UnB para obter orientações sobre projetos, mentoria e apoio para suas ideias inovadoras.
          </p>
        </div>
      </section>

      <section className="swiper-wrapper" ref={carousel}>
        {data.map((item, index) => {
          const { Foto, Nome, Descricao, Email } = item;
          return (
            <div className="card swiper-slide" key={index}>
              <div className="card__image">
                <img src={Foto} alt={Nome} className='img-empresas'/>
              </div>
              <div className="card__content">
                <span className="card__name-prof">{Nome}</span>
                <span className="card__email-prof">{Email}</span>
                <p className="card__text-prof">{Descricao}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section>
        
      </section>

      <section class="footer-basic">
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
      </section>

      <div className="swiper-pagination"></div>

    </section>
  );
};

export default Professores;