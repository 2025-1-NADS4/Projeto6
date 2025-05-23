// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaDoorOpen } from 'react-icons/fa';  

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Muuve Now</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre Nós</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <FaDoorOpen /> Sair
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
