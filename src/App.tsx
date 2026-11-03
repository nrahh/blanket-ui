import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home.tsx";
import Navbar from "./components/ui/NavBar.tsx";
import Footer from "./components/ui/Footer.tsx";
import Designs from "./pages/Designs.tsx";
import About from "./pages/About.tsx";
import Legal from "./pages/Legal.tsx";
import FAQ from "./pages/FAQ.tsx";
import ContactUs from "./pages/ContactUs.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/designs" element={<Designs />} />
                <Route path="/about" element={<About />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}