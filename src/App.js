import { Component } from 'react';
import './SCSS/App.scss';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"; // in react-router-dom v6, "Switch" is replaced by routes "Routes"

import Header from './Components/Header.jsx';
import LeftMenu from './Components/LeftMenu.jsx';




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JsonDatas: [],
      isLoading: false, 
      error: null,
    }
  }

  render() {
  return (
    <div className="App">
      <Header />
      <LeftMenu />
      <BrowserRouter>
        <Routes>
          <Route exact path="/:id" />
            <Route path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
}
