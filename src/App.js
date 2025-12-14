// import video from "./assets/videos/video.mp4";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import BlogsController from "./pages/blogs/BlogsController";
// import './index.css';


const App = () => {
    
    return(
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <About />
                        <Projects />
                        <Skills />
                        <Contact />
                    </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/blogs/*" element={<BlogsController />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </HashRouter>
    )
}
export default App;