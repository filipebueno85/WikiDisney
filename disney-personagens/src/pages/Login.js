import React, { Component } from 'react';
import Footer from '../components/Footer';
import HeaderHome from '../components/HeaderHome';

class Login extends Component {
  state = {
    name: '',
  }

  inputText = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { history } = this.props;
    const { name } = this.state;
    localStorage.setItem('nomeLogin', JSON.stringify({ nome: name }))
    history.push('/home')
    console.log(name);
  };
  render() {
    const { name } = this.state;
    return (
      <div className="container">
        <HeaderHome />
        <div className="login-page">
          <h1>Insira seu nome para prosseguir!</h1>
          <form className="login-form">
            <input type="text" name="name" value={name} onChange={this.inputText} />
            <button type="button" disabled={name.length < 3} onClick={this.handleClick}>Entrar</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;