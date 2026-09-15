import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Homepage from "./Pages/Homepage.jsx"
import Product from "./Pages/Product.jsx"
import About from "./Pages/About.jsx"

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />       
        <Route path="/Product" element={<Product />} />
        <Route path="/About" element={<About />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
