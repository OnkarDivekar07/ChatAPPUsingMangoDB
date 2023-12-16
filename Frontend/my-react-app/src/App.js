// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}  />
        <Route path="/chats" element={<Chatpage />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
