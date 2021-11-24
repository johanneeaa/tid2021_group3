import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import Cars from "./Pages/Cars";
import Rental from "./Pages/Rental";

// navigation needs styling

function App() { // ###
  return (
    <>
    <NavigationBar /> 

      <BrowserRouter>
        <Routes>
          <Route path="/cars" element={<Cars />} />
          <Route path="/rental" element={<Rental />} />
        </Routes>
      </BrowserRouter>
    temp. front page. use tabs to acces data
  </>
  );
}

export default App;
