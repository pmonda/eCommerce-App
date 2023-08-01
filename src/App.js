import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import logo from "./logo.svg";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-cyan-400 to-red-300">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <footer className="bg-black text-white text-center mt-5 py-5">
          This website is made by Pranesh Monda
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
