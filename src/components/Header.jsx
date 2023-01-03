import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    name: '',
  }
  
  componentDidMount() {
    this.handlerUser();
  }
  
  handlerUser =  () => {
   const user = JSON.parse(localStorage.getItem('nomeLogin')).nome;
   this.setState({ name: user}); 
  }
  

  render() {
    const { name } = this.state;
    return (
      <header className="header-all">
        <div className="wiki-Disney">
        <h1><span className="wiki">WIKI</span>Disney</h1>
        </div>
        <div className="header-botton">
        <nav className="side-bar">
          <ul>
            <li><Link to="/home">Home</Link></li>
          </ul>
        </nav>
        <div className="gretting">
        <h3>{`Olá ${name}!`}</h3>
        </div>
        </div>
      </header>
    );
  }
}

export default Header;