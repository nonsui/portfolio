import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import WelcomePage from './WelcomePage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <WelcomePage     
            title="Jim Kash Portfolio" 
            content="Weclome to my portfolio site"/>
      <NavBar 
            resumeCaption= "View Resume"
            githubCaption= "github page"
            aboutMeCaption= "About Me"
            projectsCaption= "Projects"
      />
    </div>
  );
}

export default App;
