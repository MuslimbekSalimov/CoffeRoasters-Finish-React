import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Plan from './Components/Plan/Plan';
import Error from './Components/Page/Error/Error';
import { Context as themeContext } from './Components/Context/Theme';
import React from 'react';

function App() {

  const {theme} = React.useContext(themeContext)

  return (
   <div className={`body body__${theme}`}>
   <Header/>

    <Routes>
      <Route path=''  element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='plan' element={<Plan/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>

   <Footer/>
   </div>
  );
}

export default App;
