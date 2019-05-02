import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./components/Home"
import './App.css'

// @ts-ignore
const App = ({ store }) => (
    <Provider store={store}>
      <Router>
        <Route path="/:pageNumber?" component={Home} />
      </Router>
    </Provider>
)

export default App;
