import React from 'react';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills';
import { MyProjects } from './projects/MyProjects';
import { Footer } from './footer/Footer';
import { Contacts } from './contacts/Contacts'
import  Styles  from './App.module.css'


const App = () => {
  return (
    <div className={Styles.App}>
      <Header />
      <Main />
      <Skills />
      <MyProjects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
