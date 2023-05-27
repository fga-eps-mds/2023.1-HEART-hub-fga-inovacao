import React from 'react';
import './Contatos.css'   
import Card from './Card';

import { FiGithub,
  FiFigma,
  FiLinkedin,
  FiInstagram,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMail,
  FiTwitter,
  FiFacebook
} from "react-icons/fi";
{/*Importação de todos os componentes e estilos necessários para esta página*/}

const Contatos = () => {
  return (
    <section className='section'>
      <section className='first-section'>
        <div>
          <h1 className='contatos'></h1>
          <div className="card-container">
{/*Definição do componente contatos, aqui ele está retornando a estrutura da pagina*/}

          <Card
              title={
                <>
                  <div className="title">
                  <FiPhone className='iconc1'/> <a href='https://fga.unb.br/unb-gama/contato'>
                  Ligue para nós
                    <p className='iconp1'>+55 (61) 3107-8901/ +55 (61) 3107-8907 </p> 
                  </a>
                  </div>
                  <br></br>

                  <div className="title">
                   <FiMapPin  className='iconc1' /><a href='https://abre.ai/geFp'> Localização
                    <p className='iconp1'>St.Leste Projeção A- Gama Leste, <br></br>
                      Brasília-DF,72444-240</p>
                      </a>
                  </div>

                  <br></br>

                  <div className="title">
                  <FiClock className='iconc1'/> <a href='https://fga.unb.br/unb-gama/contato'>Horário comercial
                    <p className='iconp1'>Seg-Sex: 08 horas - 18 horas <br></br>
                    e 14 horas-18 horas</p>
                    </a>
                  </div>
                </>
              }
              description=""
              color="#8E4694"
              />
{/*Acima temos o primeiro componente card criado, que tem as propriedades de
titulo,descrção e cor, nesse card temos, cada secção tem um icone, um link e 
um parágrafo de texto descritivo*/}

            <Card 
              title="Card 2" 
              description="" 
              color="#f5f5f5" 
              newTitle="Entre em Contato"
            />
{/*Acima temos o segundo componete, que é o card do meio, a função dele é conter
o formulário para envio de mensagens para o site */}

            <Card 
              title="" 
              description="" 
              color="#8E4694"
              icon={
                <>
                  <div className='iconc3'>
                    <a href='https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao'>
                    <FiGithub/>
                    </a>
                  </div>
                    
                  <br></br>

                  <div className='iconc3'>
                    <a href='https://instagram.com/unb_oficial?igshid=MzRlODBiNWFlZA=='>
                    <FiInstagram />
                    </a>
                  </div>
                  <br></br>

                  <div className='iconc3'>
                    <a href='https://www.linkedin.com/school/universidade-de-bras-lia/'>
                    <FiLinkedin /> 
                    </a>
                  </div>
                  <br></br>
                  
                  <div className='iconc3'>
                    <a href='https://fga.unb.br/unb-gama/contato'>
                    <FiMail /> 
                    </a>
                  </div>
                  <br></br>
                    
                  <div className='iconc3'>
                    <a href='https://twitter.com/unb_oficial'>
                    <FiTwitter /> 
                    </a>
                  </div>
                  <br></br>
                      
                  <div className='iconc3'>
                    <a href='https://m.facebook.com/unbgama'>
                    <FiFacebook/>
                    </a>
                  </div>
                </>
              }
            />
{/*Acima temos o terceiro e ultimo card desta secção que tem varios icones 
renderizados como links clicaveis, cada icone representa um link para uma
rede social diferente*/}

          </div>
        </div>
      </section>
      {/* Resto do código */}
    </section>
  );
};

export default Contatos;
