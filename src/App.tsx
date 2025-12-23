import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { ThemeProvider } from "./context/ThemeProvider";
import Footer from "./components/Footer";
import About from "./pages/About";
import { ScrollToTop } from "./components/ScrollToTop";
import { Speakers } from "./pages/Speakers";
import Agenda from "./pages/Agenda";
import FAQ from "./pages/FAQ";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Toaster position="top-right" />
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>  
          <Footer /> 
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;




