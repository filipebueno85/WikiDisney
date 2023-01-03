import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Busca from './Busca';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="home-container">
          <div className="home-texto">
            <h1>Descubra mais sobre o seu personagem da Dinsey!</h1>
            <p>Que filme ele aparece? Qual série? Algum jogo?</p>
            <h2>Como pesquisar?</h2>
            <p>Para pesquisar escreva o nome do seu personagem em inglês.</p>
          </div>
          <Busca />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;