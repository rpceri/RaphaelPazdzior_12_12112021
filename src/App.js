import {BrowserRouter, Route, Routes} from "react-router-dom"; // in react-router-dom v6, "Switch" is replaced by routes "Routes"

import './SCSS/App.scss';

import Header from './Components/Header.jsx';
import LeftMenu from './Components/LeftMenu.jsx';
import MainBloc from './Components/MainBloc.jsx';


export default function App() {
  return (
    <div className="App">
      <Header />
      <LeftMenu />
      <BrowserRouter>
        <Routes>
          <Route exact path="/user/:idUser" element={<MainBloc />}></Route> {/* in V6, you can't use the component prop anymore. It was replaced in favor of element:*/}
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}