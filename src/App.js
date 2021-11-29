import {BrowserRouter, Route, Routes} from "react-router-dom"; // in react-router-dom v6, "Switch" is replaced by routes "Routes"

import './SCSS/App.scss';

import Header from './Components/Header.jsx';
import LeftMenu from './Components/LeftMenu.jsx';
import MainComponent from './Components/MainComponent.jsx';
import NotFound from './Components/NotFound.jsx';

export default function App() {
  console.log('App used')
  return (
    <div className="App">
      <Header />
      <LeftMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/user/:idUser" element={<MainComponent />}></Route> {/* in V6, you can't use the component prop anymore. It was replaced in favor of element */}
          <Route path="*" element={<NotFound />}></Route> {/* in V6, must put path="*, see https://reactrouter.com/docs/en/v6/getting-started/overview */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}