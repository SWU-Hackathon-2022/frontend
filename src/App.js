import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header"></header>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
