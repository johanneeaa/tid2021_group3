import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import Cars from "./Pages/Cars";
import Rental from "./Pages/Rental";
import Transfers from "./Pages/Transfers";
import Customer from "./Pages/Customer";
import Statistics from "./Pages/Statistics";

// our App(), should containt our navigation with paths to pages
// Tab navigation needs styling, we can't see what are pressed

function App() {
  const temp = (
    <main>
      <h3>Temporary front page. Use tabs to access data</h3> <br />
    </main>
  );
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="" element={temp} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
