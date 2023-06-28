import React from 'react';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills';
import { MyProjects } from './myProjects/MyProjects';


const App =() => {
  return (
    <div>
      <Header />
      <Main />
      <Skills/>
      <MyProjects/>
    </div>
  );
}

export default App;
