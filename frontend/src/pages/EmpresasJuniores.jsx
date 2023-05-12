import React, { useEffect, useState, useRef } from 'react';
import './EmpresasJuniores.css'   
import { FiChevronRight } from "react-icons/fi";

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
        </section>
    );
};

export default EmpresasJuniores;