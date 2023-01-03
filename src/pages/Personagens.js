import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import getPersonagensId from '../services/disneyApiID';

class Personagens extends Component {

  state = {
    personagens: [],
  }

  async componentDidMount() {
    const { match: { params: { _id } } } = this.props;
    const personagem = await getPersonagensId(_id);
    // const personagens = await this.getAllPersonagens(_id);
    this.setState({
      personagens: [personagem],
    });
  };

  // getAllPersonagens = async (id) => {
  //   const URL = `https://api.disneyapi.dev/${id}`;
  //   const result = await fetch(URL);
  //   const data = result.json()
  //   return data.data;
  // } 

  render() {
    const { personagens } = this.state;
    console.log(personagens);
    return (
      <div>
        {personagens.map((personagem) => (
          <div className="container" key={personagem._id}>
            <Header />
            <div className="personagem-container">
              <div className="profile-personagem">
                <h1>{personagem.name}</h1>
                <img src={personagem.imageUrl} alt={personagem.name} />
              </div>
              <div className="personagens-info">
              {personagem.films.length > 0 && (
                <div className="infos">
                  <h2>Films</h2>
                  {personagem.films.map((film) => (
                    <ul>
                      <li>{film}</li>
                    </ul>
                  ))}</div>

              )}
              {personagem.shortFilms.length > 0 && (
                <div className="infos">
                  <h2>Short Films</h2>
                  {personagem.shortFilms.map((film) => (
                    <ul>
                      <li>{film}</li>
                    </ul>
                  ))}</div>
              )}
              {personagem.tvShows.length > 0 && (
                <div className="infos">
                  <h2>TV Shows</h2>
                  {personagem.tvShows.map((film) => (
                    <ul>
                      <li>{film}</li>
                    </ul>
                  ))}</div>
              )}
              {personagem.videoGames.length > 0 && (
                <div className="infos">
                  <h2>Games</h2>
                  {personagem.videoGames.map((film) => (
                    <ul>
                      <li>{film}</li>
                    </ul>
                  ))}</div>
              )}

              </div>
            </div>
          </div>
        ))}
        <Footer />
      </div>
    );
  }
}

export default Personagens;

