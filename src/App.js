import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './styles.css';
import Widgets from './Widgets';
import './Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div className="app">
      <Routes>
        {<Sidebar />}
        <Feed />
        <Widgets />
      </Routes>
    </div>
  );
};

export default App;