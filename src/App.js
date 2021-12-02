import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import Cars from "./Pages/Cars";
import Rental from "./Pages/Rental";

// our App(), should containt our navigation with paths to pages
// Tab navigation needs styling, we can't see what are pressed

function App() { 
  return (
    <>
    <NavigationBar /> 

      <BrowserRouter>
        <Routes>
          <Route path="/cars" element={<Cars />} />
          <Route path="/rental" element={<Rental /> } />
        </Routes>
      </BrowserRouter>
    Temporary front page. Use tabs to acces data 
  </>
  );
}

export default App;
