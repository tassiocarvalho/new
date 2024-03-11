import React from 'react';
import './App.css';
import githubIcon from './github-icon.png'; // Importa o ícone do GitHub
import linkedinIcon from './linkedin-icon.png'; // Importa o ícone do LinkedIn

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tássio Carvalho Rodrigues</h1>
        <p>Esta é uma página inicial de apresentação usando React.</p>
      </header>
      <div className="button-container">
        <a href="https://github.com/tassiocarvalho" target="_blank" rel="noopener noreferrer">
          <button className="github-button">
            <img src={githubIcon} alt="Ícone do GitHub" className="icon" /> GitHub Autor
          </button>
        </a>
        <a href="https://www.linkedin.com/in/tassio-carvalho-a5315121a/" target="_blank" rel="noopener noreferrer">
          <button className="linkedin-button">
            <img src={linkedinIcon} alt="Ícone do LinkedIn" className="icon" /> LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
