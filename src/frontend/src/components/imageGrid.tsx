import React from 'react';
import Vinicius from '../assets/Vinicius.jpeg';
import Matheus from '../assets/Matheus.jpeg';
import Sergio from '../assets/Sergio.jpg';
import Felipe from '../assets/Felipe.jpeg'
import '../styles/ImageGrid.css'; 

const ImageGrid = () => {
  const team = [
    { src: Vinicius, name: 'Vinicius Piovesan', linkedin: 'https://www.linkedin.com/in/vinipiovesan/' },
    { src: Matheus, name: 'Matheus de Medeiros', linkedin: 'https://www.linkedin.com/in/matheus-de-medeiros-5516a02a9/' },
    { src: Sergio, name: 'Sérgio Ricardo', linkedin: 'https://www.linkedin.com/in/sergio-pedote/' },
    { src: Felipe, name: 'Felipe Ribeiro', linkedin: 'https://www.linkedin.com/in/felipe-ribeiro-almeida-2698652b9/' },
  ];

  return (
    <div className="image-grid">
      {team.map((item, index) => (
        <a
          href={item.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="image-card"
        >
          <img src={item.src} alt={item.name} className="image" />
          <div className="overlay">{item.name}</div>
        </a>
      ))}
    </div>
  );
};

export default ImageGrid;
