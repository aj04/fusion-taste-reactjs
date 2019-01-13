import React, { Component } from 'react';
import './App.css';
import Main from "./components/MainComponent";
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

// "react-redux-form": "^1.16.12",
// "redux": "^4.0.1"
//  "react-redux": "^6.0.0",