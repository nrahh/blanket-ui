import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home.tsx";
import Navbar from "./components/ui/NavBar.tsx";
import Footer from "./components/ui/Footer.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}