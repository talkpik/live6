import React from 'react';
import Footer from './Footer';
import {HashRouter} from "react-router-dom";
import NavMenuBar from './NavMenuBar';

function App() {
  return (
    <HashRouter basename='/'>
      <NavMenuBar />
      <Footer />
    </HashRouter>
  );
}
export default App;
