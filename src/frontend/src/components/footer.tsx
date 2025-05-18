// src/components/Footer.tsx
import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3 border-top border-purple mt-auto">
      <p className="mb-0">

        <a
          href="https://github.com/2025-1-NADS4/Projeto6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple"
        >
          MuuVe Now
        </a>
        {' '}
        © 2025 por Vinicius Piovesan, Matheus de Medeiros, Sérgio Ricardo, Felipe Ribeiro está licenciado sob CC BY 4.0.

      </p>
    </footer>
  );
};

export default Footer;
