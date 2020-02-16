import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import UserInfo from './components/UserInfo';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <h1>React hook examples!!</h1>
      <>
      <h2>1. useState hook</h2>
      <ClickCounter/>
      <UserInfo/>
      <Item/>
      </>
    </div>
  );
}

export default App;
