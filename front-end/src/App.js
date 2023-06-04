import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContactFormPage from './Pages/ContactFormPage';
import ContactListPage from './Pages/ContactListPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand font-weight-bold">Contacts App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Contacts</Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">Create Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="content">
            <Route path="/" exact component={ContactListPage} />
            <Route path="/edit/:_id" component={ContactFormPage} />
            <Route path="/create" component={ContactFormPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
