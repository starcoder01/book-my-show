import { Route } from 'react-router-dom';

//HOC
import DefaultHOC from "./hoc/Default.HOC";
//Component
import HomePage from "./pages/Home.page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    //Fragment
    <>
      <DefaultHOC path="/" exact component={HomePage}/>
    </>
  );
}

export default App;
