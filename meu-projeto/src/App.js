import React, { useRef } from 'react';
import './App.css';
import githubIcon from './github-icon.png'; // Importa o ícone do GitHub
import linkedinIcon from './linkedin-icon.png'; // Importa o ícone do LinkedIn
import copyIcon from './copy-icon.png'; // Importa o ícone de copiar

function App() {
  const emailRef = useRef(null);

  const handleCopyEmail = () => {
    emailRef.current.select();
    document.execCommand('copy');
    alert('Email copiado para a área de transferência!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="big-name">Tássio Carvalho Rodrigues</h1>
        <h2 className="last-name"></h2>
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
            <img src={linkedinIcon} alt="Ícone do LinkedIn" className="icon" /> LinkedIn Autor
          </button>
        </a>
      </div>
      <div className="email-container">
        <input type="text" value="tassiocarvalhor@gmail.com" readOnly ref={emailRef} className="email-input" />
        <button onClick={handleCopyEmail} className="copy-button">
          <img src={copyIcon} alt="Ícone de copiar" className="icon" />
        </button>
      </div>
    </div>
  );
}

export default App;