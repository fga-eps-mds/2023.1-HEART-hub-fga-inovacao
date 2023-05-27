import React, { useEffect, useState, useRef } from 'react';
import './EmpresasJuniores.css';
import img_logo from '../img/logo-unb.png';
import img_fga from '../img/fga.png';   
import { FiChevronRight } from "react-icons/fi";
import { FiGithub,
    FiFigma,
    FiLinkedin,
    FiInstagram
  } from "react-icons/fi";

function EmpresasJuniores() {
    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/static/EmpresasJuniores.json')
        .then((response) => response.json())
        .then(setData);
    }, []);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
    
    if(!data || !data.length) return null;

    return (
        <section className='home_container'>
            <div>
                <h1>Empresas Juniores</h1>
            </div>
            <div className='carousel' ref={carousel}>
                {data.map((item) => {
                    const{nome, link, descricao, instagram} = item;
                    return (
                        <div className='item'>
                            <div className='info'>
                                <span className='nome'>{nome}</span>
                                <span className='link'>{link}</span>
                                <span className='descrição'>{descricao}</span>
                                <span className='instagram'>{instagram}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='buttons'>
                <button onClick={handleLeftClick}>
                    <FiChevronRight className='btn'/>
                </button>
                <button onClick={handleRightClick}>
                    <FiChevronRight className='btn'/>
                </button>
            </div>
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
        </section>
    );
};

export default EmpresasJuniores;