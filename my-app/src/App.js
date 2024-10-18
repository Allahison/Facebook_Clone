// src/App.js
import React from "react";
import Post from "./components/Post";
import { Provider } from "react-redux";
import store from "./app/store";
import'./App.css';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
        <Post />
      </div>
    </Provider>
  );
}

export default App;


