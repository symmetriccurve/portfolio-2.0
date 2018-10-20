import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/common/app.css';
import './styles/desktops/app.css';
import './styles/mobile/app.css';
import './styles/tablet/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import LaunchPage from './launchPage/LaunchPage';
class App extends Component {
  render() {
    return (
      <div className="App">
        <LaunchPage />
      </div>
    );
  }
}

export default App;
