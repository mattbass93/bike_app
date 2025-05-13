import React from 'react';
import { Link } from 'react-router-dom';
import BikeAppLogo from '../assets/logos/logo1.png';
import './DashboardHeader.css';

const DashboardHeader: React.FC = () => {
  return (
    <header className="dashboard-header">
      <h1 className="main-logo">
        <img src={BikeAppLogo} alt="SportSee" />
      </h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/profile">Profil</Link></li>
          <li><Link to="/settings">Options</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default DashboardHeader;
