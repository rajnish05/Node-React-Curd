import React, { Component } from 'react';
import { Provider } from "react-redux";
import {Router} from 'react-router-dom';
import PropTypes from 'prop-types';

// importing Store
import store from './Store/configuerStore';

// CSS file
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import history from "./history"

// Header of the application
import Header from "./Navbar/Header";
// Footer of the Application
import Footer from "./Navbar/Footer"
// importing Routes 
import Routes from "./routes"


class App extends Component {

  static defaultProps = {
      store: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    };
  
render = () =>  (
    <div>
      <Provider store={store}>
          <Router history={history}>
                  <div>
                  <Header />
                      <Routes />
                  <Footer />
                  </div>
          </Router>
      </Provider>
  </div>

)
}

export default App;
