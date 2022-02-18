import { Route } from "react-router-dom";
import './App.css';
import ChatPage from "./Pages/ChatPage";
import Homepage from "./Pages/Homepage";
import React from 'react';



function App() {
  return (
    <div className="App">

      <Route path='/' component={Homepage} exact />
      <Route path='/chats' component={ChatPage} /> 
    </div>
  );
}

export default App;
