import './styles.css';
import Home from "./pages/Home";
import Navbar from "./Navbar";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  
  //WEBPAGE ROUTING
  return (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
  </>
  );
}

export default App;
