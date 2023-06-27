import React from 'react';

import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './main/skills/Skills';


const App =() => {
  return (
    <div>
      <Header />
      <Main />
      <Skills/>
    </div>
  );
}

export default App;
