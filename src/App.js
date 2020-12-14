import React from 'react';
import { BackgroundStyled } from './components/BackgroundStyled';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './components/Routes';



function App() {
  return (
    <div>
        <Header />
        <BackgroundStyled>
          <Routes />
        </BackgroundStyled>
        <Footer />
    </div>
  );
}

export default App;