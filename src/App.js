import React, { Component } from 'react';
import './App.scss';
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Ducks/store'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
      <div className='blue-box'></div>
      <HashRouter>
        {routes}
      </HashRouter>

      </Provider>
      </div>
    );
  }
}

export default App;

