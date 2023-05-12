import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img1 from './../img/img1.png';
import img2 from './../img/img2.png';
import img3 from './../img/img3.png';
import img4 from './../img/img4.png';
import styles from './sec2.css'

const Sec2 = () => {
        const images = [
            {
              id: 1,
              src: img1,
              alt: 'Image 1',
            },
            {
              id: 2,
              src: img2,
              alt: 'Image 2',
            },
            {
              id: 3,
              src: img3,
              alt: 'Image 3',
            },
            {
              id: 4,
              src: img4,
              alt: 'Image 4',
            },
          ];
        
          const [currentImageIndex, setCurrentImageIndex] = useState(0);
        
          useEffect(() => {
            const intervalId = setInterval(() => {
              setCurrentImageIndex((currentImageIndex + 1) % images.length);
            }, 3000);
        
            return () => clearInterval(intervalId);
          }, [currentImageIndex, images.length]);
        
          return (
            <section className="home_container">
                <h1 className='home_containerh2'>Um lugar só com:</h1>
                <p className='home_container_p2'>
                    <ul>
                    <li>Os professores e pesquisadores da FGA e suas competências;</li>
                    <br/>
                    <li>As diversas iniciativas e estruturas da FGA;</li>
                    <br/>
                    <li>Todas as patentes que a FGA detém e disponibiliza para parceria com empresas e outras instituições interessadas;</li>
                    <br/>
                    <li>As disciplinas de graduação e pós-graduação sobre empreendedorismo e inovação na FGA;</li>
                    <br/>
                    <li>As empresas com DNA FGA, criadas a partir de iniciativas incubadas na FGA ou que seus fundadores e criadores foram alunos ou pesquisadores da FGA.</li>
                    </ul>
                </p>
              <div className="carrossel-container">
                <motion.div
                  className="carrossel-images"
                  style={{ position: 'relative', overflow: 'hidden', height: '500px' }}
                >
                  {images.map((image, index) => (
                    <motion.img
                      key={image.id}
                      className="carrossel-image"
                      src={image.src}
                      alt={image.alt}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: index === currentImageIndex ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </section>
          );
        };

export default Sec2;