import React, { useState, useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import './sec3.css';
import {
    FaLightbulb,
    FaMedal,
    FaSuitcase,
    FaBookOpen,
    FaCalendarAlt,
    FaPhoneAlt,
    FaBars,
    FaHome,
} from "react-icons/fa";
import img5 from './../img/img5.png';



function Sec3(){
    return(
        <section className="sec3"style={{ display: 'flex' }}>
            <h2>UnB: O Lugar certo para empreender e inovar</h2>
            <p style={{ textAlign: "justify" }}>A Universidade de Brasília (UnB) é uma instituição pública de ensino superior brasileira, localizada na capital do país, Brasília. A universidade é reconhecida por sua excelência acadêmica e possui uma ampla gama de cursos de graduação e pós-graduação nas áreas de humanidades, ciências exatas, biológicas e da saúde.Além dessas qualidades, a UnB é também conhecida por sua relevância na produção científica, seu compromisso com a sustentabilidade ambiental e sua contribuição para o desenvolvimento econômico e social do Brasil. A Universidade de Brasília é, portanto, uma instituição de grande importância para o país e um símbolo do avanço do conhecimento e da ciência no Brasil.

            </p>
            
            <ul className='bloco1'>
                <li><FaLightbulb/> Iniciativas
                    <p>Conheça as diversas iniciativas para o estimulo da inovação
                    
                    </p>
                </li>

                <li><FaMedal/> Competências
                    <p>Consulte os pesquisadores e grupos de pesquisa da UnB 
                    
                    </p>
                </li>

                <li><FaSuitcase/> Empresas
                    <p>Conheça as empresas criadas por iniciativas de 
                    alunos e ex alunos da UnB
                    </p>
                </li>
            </ul>
            
            
            <ul className='bloco2'>
                <li><FaBookOpen/> Disciplinas
                    <p>Tenha acesso as disciplinas ligadas a 
                        tecnologia e empreendedorismo da UnB 
                    </p>
                </li>

                <li><FaCalendarAlt/> Editais
                    <p>Fique por dentro de tudo que está rolando na UnB 
                    através dos editais abertos</p>
                </li>

                <li><FaPhoneAlt/> Contatos
                    <p>Tenha acesso aos meios de contato disponivel 
                    para falar com a UnB</p>
                </li>
            </ul>
        </section>
    )
}

export default Sec3;
