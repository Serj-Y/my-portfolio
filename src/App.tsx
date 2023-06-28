import React from 'react';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills';
import { MyProjects } from './myProjects/MyProjects';
import { Footer } from './footer/Footer';


const App =() => {
  return (
    <div>
      <Header />
      <Main />
      <Skills/>
      <MyProjects/>

      <Footer/>
    </div>
  );
}

export default App;
