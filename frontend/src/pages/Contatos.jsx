import React, { useState, useEffect } from 'react';
import './Contatos.css'
import img_logo from '../img/logo-unb.png';
import img_fga from '../img/fga.png';   
import { FiGithub,
  FiFigma,
  FiLinkedin,
  FiInstagram,
  FiMapPin,
  FiMail,
  FiFacebook,
  FiFile
} from "react-icons/fi";
import { TbLoader2 } from "react-icons/tb";
import emailjs from 'emailjs-com';

const Contatos = () => {
  const [contatosData, setContatosData] = useState([]);
  useEffect(() => {
      fetch('https://api.npoint.io/0bfc36b8202f0ec3eff9')
        .then((response) => response.json())
        .then((data) => setContatosData(data));
    }, []);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    function sendEmail(e) {
      e.preventDefault();
  
      if (name === '' || email === '' || telefone === '' || mensagem === '') {
        alert("Preencha todos os campos");
        return;
      }
  
      setIsLoading(true);
  
      const templateParams = {
        from_name: name,
        mensagem: mensagem,
        telefone: telefone,
        email: email
      }
  
      emailjs.send("service_phx2lwg", "template_p7dpp2r", templateParams, "Id2o82f1r7LPUALfj")
        .then((response) => {
          alert("Email enviado com sucesso!");
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName('');
          setEmail('');
          setTelefone('');
          setMensagem('');
          setIsLoading(false);
        })
        .catch((err) => {
          alert("Erro ao enviar o email. Por favor, tente novamente.");
          console.log("ERRO: ", err);
          setIsLoading(false);
        });
    }
  
    const [inputFocus, setInputFocus] = useState(false);
  
    const handleFocus = () => {
      setInputFocus(true);
    };
  
    const handleBlur = (e) => {
      if (e.target.value === '') {
        setInputFocus(false);
      }
    };

    return (
    <section className='section'>
      <div className="container-contatos">
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Fale conosco</h3>
          <p className="text">
            Fique à vontade para entrar em contato conosco! Estamos disponíveis para responder suas perguntas, fornecer informações adicionais ou ajudá-lo(a) da melhor maneira possível. Estamos ansiosos para ouvir de você!
          </p>

          <div className="info">
            <div className="information">
              <FiMapPin className='icons-pins-i' />
              <a className='link-a' href='https://www.google.com/maps/place/UnB+-+Campus+Gama/@-15.98961,-48.0443975,15z/data=!4m2!3m1!1s0x0:0x447f05b6f05fa281?sa=X&ved=2ahUKEwjFzo_58LH_AhX2jZUCHZIMAY0Q_BJ6BAhfEAg'>
                St. Leste Projeção A - Gama Leste, Brasília - DF, 72444-240
              </a>
            </div>
            <div className="information">
              <FiMail className='icons-pins' />
              <p>hearthubfga@gmail.com</p>
            </div>
          </div>

          <div className="social-media">
            <p>Conecte-se conosco:</p>
            <div className="social-icons">
              <a className='icon-ct' href="#">
                <FiFacebook />
              </a>
              <a className='icon-ct' href="#">
                <FiLinkedin />
              </a>
              <a className='icon-ct' href="#">
                <FiInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <h3 className="title">Contate-nos</h3>
            <div className={`input-container ${inputFocus ? 'focus' : ''}`}>
              <input
                type="text"
                name="name"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="">Nome</label>
              <span>Nome</span>
            </div>
            <div className={`input-container ${inputFocus ? 'focus' : ''}`}>
              <input
                type="email"
                name="email"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className={`input-container ${inputFocus ? 'focus' : ''}`}>
              <input
                type="tel"
                name="phone"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setTelefone(e.target.value)}
                value={telefone}
              />
              <label htmlFor="">Telefone</label>
              <span>Telefone</span>
            </div>
            <div className={`input-container textarea ${inputFocus ? 'focus' : ''}`}>
              <textarea
                name="message"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setMensagem(e.target.value)}
                value={mensagem}
              ></textarea>
              <label htmlFor="">Mensagem</label>
              <span>Mensagem</span>
            </div>
            <button type="submit" className="btn" disabled={isLoading}>
              {isLoading ? <TbLoader2 className="loading-icon" /> : "Enviar"}
            </button>
          </form>
        </div>
      </div>
      </div>
 

      <section className='second-section'>
        <div className='titiulo_contatos'>
          <h1>Nossa Equipe</h1>
        </div>
        <div className='card_contatos'>
          {contatosData.map((item, index) => {
            const { foto, nome, linkdin, função, git, gitpage} = item;
            return (
              <div className='card-grid-contatos' key={index}>
                <img className='foto_contatos' src={foto} alt="imagem grupo" />
                <h1 className='nome_contatos'>{nome}</h1>
                {/* <h2 className='curso'>{função}</h2> */}
                <div className='icons-contatos_sec-2'>
                  <a href={linkdin}><FiLinkedin /></a>
                  <a href={git}><FiGithub /></a>
                </div>
              </div>
            );
          })}
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
                <li className="list-inline-item"><a href="premiações">Premiações</a></li>
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
export default Contatos;
