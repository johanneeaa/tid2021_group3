import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import Cars from "./Cars";
import Rental from "./Rental";

// functions marked # are snippets from https://react-table.tanstack.com/docs/examples/filtering without modifications
// functions marked ## are snippets with our own modifications
// functions marked ### are OC 

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

  </>
  );
}

export default App;
