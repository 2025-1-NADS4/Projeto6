import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ImageGrid from '../components/imageGrid';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Navbar />

      <main className="about-content">
        <h1 className="about-title">Nossa Equipe</h1>
        <p className="about-description">Conheça as pessoas por trás do projeto.</p>
        <ImageGrid />
      </main>

      <div className="mt-5 mb-5 text-center px-3">
        <h2 className="text-purple mb-3">Sobre o Projeto</h2>
        <p className="fs-5" style={{ maxWidth: '900px', margin: '0 auto' }}>
          Este projeto tem como objetivo estimar o custo de corridas de transporte privado com base na origem e destino inseridos pelo usuário.
          Utilizando tecnologias como React no frontend e um modelo de Machine Learning no backend, a aplicação calcula a distância, o tempo estimado de viagem
          e ajusta os valores finais de acordo com variáveis como horário e distância percorrida. Além disso, o sistema armazena o histórico de buscas,
          permitindo que o usuário consulte detalhes de viagens anteriores.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
