import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Busca from './pages/Busca';
import Home from './pages/Home';
import Login from './pages/Login';
import Personagens from './pages/Personagens';


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/personagens/:_id" component={ Personagens } />
            <Route path="/busca" component={ Busca } />
            <Route path="/home" component={ Home } />
            <Route exact path="/" component={ Login }/>
          </Switch>
        </BrowserRouter>
      </div>
    );

  }
}

export default App;
