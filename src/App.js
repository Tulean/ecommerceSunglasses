import React, { Component } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/home';
import './css/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-body">
          <Router>
            <Route path="/" exact component={Home} />
          </Router>
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
