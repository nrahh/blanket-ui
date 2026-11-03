
import {useEffect, useState} from "react";
import {motion} from "motion/react";
import {Menu, X} from "lucide-react";
import {useLocation, useNavigate} from "react-router-dom";

const navbar_items = [
    ["normal", "/", "Home"],
    ["normal", "/designs", "Designs"],
    ["normal", "/about", "About"],
    ["normal", "/legal", "Legal"],
    ["normal", "/faq", "FAQ"],
    ["primary", "/contact", "Contact Us"]
];

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        function handleMouseMove(e: MouseEvent) {
            if (e.clientY <= 80) {
                setShowNavbar(true);
            } else if (window.scrollY > 100 && window.scrollY > lastScrollY) {
                setShowNavbar(false);
            }
        }

        function handleScroll() {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0) {
                setShowNavbar(true);
            } else if (currentScrollY > lastScrollY) {
                setShowNavbar(false);
                setMobileMenuOpen(false);
            } else if (currentScrollY < lastScrollY) {
                setShowNavbar(true);
            }

            lastScrollY = currentScrollY;
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <motion.div
            initial={{y: 0}}
            animate={{y: showNavbar ? "0%" : "-100%"}}
            transition={{duration: 0.3, ease: "easeInOut"}}
            className="w-full h-fit flex flex-row gap-3 p-5 border-b border-b-white/15 backdrop-blur-2xl fixed top-0 left-0 z-[100] items-center justify-between"
        >
            <div className="flex flex-row gap-3">
                <img src="/blanket.svg" alt="" className="w-6"/>
                <h1 className="text-2xl text-white">Blanket.ink</h1>
            </div>

            <div className="hidden md:flex flex-row gap-5">
                {
                    navbar_items.map((item, index) => {
                        return (
                            <motion.button
                                initial={{opacity: 1}} whileHover={{opacity: 0.7}}
                                style={{
                                    backgroundColor: item[0] === "primary" ? "white" : "transparent",
                                    color: item[0] === "primary" ? "black" : location.pathname === item[1] ? "white" : "#FFFFFF9A",
                                }} onClick={() => {navigate(item[1])}} key={index} className="w-fit h-fit flex flex-col items-center justify-center p-1.5 rounded-md cursor-pointer">
                                <h3>{item[2]}</h3>
                            </motion.button>
                        )
                    })
                }
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2">
                {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>

            {
                mobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full flex flex-col gap-2 p-4 border-b border-white/15 bg-black/70 backdrop-blur-2xl md:hidden">
                        {
                            navbar_items.map((item, index) => {
                                return (
                                    <button key={index} onClick={() => {navigate(item[1]); setMobileMenuOpen(false)}} style={{
                                        backgroundColor: item[0] === "primary" ? "white" : "transparent",
                                        color: item[0] === "primary" ? "black" : location.pathname === item[1] ? "white" : "#FFFFFF9A",
                                    }} className="w-full flex flex-col items-center justify-center p-3 rounded-md">
                                        <h3>{item[2]}</h3>
                                    </button>
                                )
                            })
                        }
                    </div>
                )
            }
        </motion.div>
    );
}
