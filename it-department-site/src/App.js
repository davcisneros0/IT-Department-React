import './styles.css';
import Home from "./pages/Home";
import Navbar from "./Navbar";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";

function App() {

  let component;

  //WEBPAGE ROUTING
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/programs":
      component = <Programs />;
        break;
    case "/faculty":
      component = <Faculty />;
        break;
    case "/contact":
      component = <Contact />;
        break;
  }
  return (
  <>
    <Navbar />
    <div className="container">
    {component}
    </div>
  </>
  );
}

export default App;
