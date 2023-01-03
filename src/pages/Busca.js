import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getPersonagens from '../services/disneyApi';

class Busca extends Component {
  state = {
    personagens: '',
    busca: [],
  }

  // componentDidMount() {
  //   this.handleClick();
  // }

  handleClick = async () => {
    const { personagens } = this.state;
    const resultado = await getPersonagens(personagens);
    this.setState({
      busca: resultado,
    });
    this.setState({
      personagens: '',
    })
    // console.log(resultado);
  }

  inputText = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { personagens, busca } = this.state;
    return (
      <div className="container">
        <div >
          <form className="login-form">
        <input type="text"  value={personagens} onChange={ this.inputText } name="personagens" />
        <button type="button" onClick={this.handleClick} >Buscar</button>
          </form>
        </div>
        <div className="resultado-pesquisa">
          {busca.map((personagem) =>
          <div className="card" key={ personagem._id }> 
         <div className="card-content">
          <p> {personagem.name} </p>
          <img src={ personagem.imageUrl } alt={ personagem.name } />
          </div>
          <Link
          to={ `/personagens/${personagem._id}` }
          >
            <button type="button" >Escolher</button>
          </Link>
          </div>
          )}
        </div>
      </div>
    );
  }
}

export default Busca;