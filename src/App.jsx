import "./assets/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ZNav from "./components/ZNav";
import Home from "./components/Home";
import About from "./components/About";
import ZFooter from "./components/ZFooter";
import { Container } from "react-bootstrap";
import MeteoFive from "./components/MeteoFive";

function App() {
  return (
    <>
     <BrowserRouter>
      <Container fluid className="d-flex flex-column min-vh-100 p-0">
        <ZNav />
        
        {/* flex-fill superpower */}
        <div className="flex-fill"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/MeteoFive/:cityId" element={<MeteoFive />} />
          </Routes>
        </div>
        
        <ZFooter />
      </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
