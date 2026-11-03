import {motion, useTransform, useScroll} from "motion/react";
import {ArrowDown, ArrowUpRight, ChevronRight} from "lucide-react";
import {useState, useRef} from "react";
import {Icon} from "@iconify/react"

export default function Home() {

    const heroRef = useRef<HTMLElement>(null);
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState<number | null>(null);
    const {scrollYProgress} = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const opacity_tree = useTransform(scrollYProgress, [0, 0.7], [0.5, 0]);

    const items = [
        ["/images/image_1.png", "ArcticFiles Concept UI", "This concept UI was for a application called \"ArcticFiles\". Which is basically a software used to upload files into a database, which only you can see. But a special one-time-use code can be generated for each file allowing it be given to users, so they can also view the view, or download it."],
        ["/images/image_2.png", "Selaura Marketplace", "This UI was made for one of our worked_with, \"Selaura\". The UI was made in both light and dark mode. But the dark-mode version has been chosen to be displayed here."],
        ["/images/image_3.png", "INKAS Armoring Concept Redesign", "This UI features a concept redesign of the \"INKAS Armoring\" companies website. Please note that this UI is not an official redesign and was not made in any partnership or affiliation with that company."]
    ]

    const steps = [
        ["Step 1", "basil:figma-outline", "When we first get a request or want to create a concept, we use Figma to create the whole UI. After we fully complete the UI in Figma we move on to coding it."],
        ["Step 2", "andrsrxn:browser-code", "When we finished creating the UI in Figma, we setup the React environment, install the essential libraries, then begin coding it."],
        ["Step 3", "basil:send-outline", "When we have finished coding it, we send a demo version of the final result to the client. Then with the client, further modifications can be made and then the final version can be sent to them."]
    ]

    const worked_with = [
        ["/worked_with/selaura.png", "Selaura"]
    ]


    function handleMouseMove(e: React.MouseEvent) {
        const cursor = document.getElementById("cursor-custom");

        if (!cursor) return;

        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }

    return (
        <div className="w-full h-fit pb-30 flex flex-col">
            <section ref={heroRef} id="hero" className="w-full pt-30 h-300 flex flex-col items-center gap-3 select-none">
                <div className="w-full h-150  flex flex-col items-center justify-center p-3 sticky top-0 text-center gap-5">
                    <motion.div style={{scale, opacity}} className="flex flex-col gap-1.5 max-w-150 z-2">
                        <h1 className="hostgrotesk text-5xl text-white">Websites <span className="instrumentserifitalic">Crafted </span>
                            for <span className="instrumentserifitalic">Ambitious</span> Businesses.</h1>
                        <p className="text-white/30">With over six years of UI design experience, we create websites that combine thoughtful design with exceptional functionality.</p>
                    </motion.div>

                    <motion.div
                        style={{scale, opacity}}
                        initial={{y: 30, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.25, ease: "easeOut"}}
                        className="flex flex-row gap-2 z-2">
                        <motion.button
                            layout initial="initial" whileHover="hover"
                            className="w-fit h-fit flex flex-row pl-3 justify-between gap-2 items-center bg-white p-2 rounded-3xl cursor-pointer">
                            <h3 className="text-black">Work With Us</h3>
                            <motion.span
                                variants={{
                                    initial: { width: 0, opacity: 0 },
                                    hover: { width: 18, opacity: 1 }
                                }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <ChevronRight width={18} height={20} className="" />
                            </motion.span>
                        </motion.button>

                        <motion.button
                            layout initial="initial" whileHover="hover"
                            className="w-fit h-fit flex flex-row pl-3 justify-between gap-2 items-center bg-white/10 border border-white/10 p-2 rounded-3xl cursor-pointer">
                            <h3 className="text-white/60">Our Work</h3>
                            <motion.span
                                variants={{
                                    initial: { width: 0, opacity: 0 },
                                    hover: { width: 18, opacity: 1 }
                                }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <ChevronRight width={18} height={20} className="text-white/60" />
                            </motion.span>
                        </motion.button>
                    </motion.div>

                    <motion.iframe
                        src="/shaders/generative-tree.html"
                        className="absolute inset-0 h-full w-full border-0 grayscale opacity-50"
                        style={{
                            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                            opacity: opacity_tree,
                        }}
                    />

                    <motion.div style={{opacity, scale, x: "-50%"}} className="absolute bottom-0 left-1/2 z-10">
                        <ArrowDown width={20} height={20} color={"gray"} />
                    </motion.div>
                </div>
            </section>

            <section id="work" className="flex flex-col gap-15 p-10">
                <motion.div
                    initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.7, ease: "easeInOut"}}
                    className="flex flex-col gap-3">
                    <h1 className="text-6xl font-medium text-white">A Glimpse of What's Possible</h1>
                    <p className="text-white/30 text-lg max-w-210">A collection of ideas, interactions, and digital experiences that reflect our approach to thoughtful design and purposeful development. Just a glimpse of what we can create.</p>
                </motion.div>

                <hr className="text-white/10" />

                {
                    items.map((item, index) => (
                        <div
                            key={index} className="w-full flex flex-col h-160">
                            <motion.div
                                initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}
                                className="w-full min-h-80 flex flex-col sm:flex-row justify-between gap-5 rounded-lg sticky top-30">
                                <img
                                    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onMouseMove={handleMouseMove}
                                    src={item[0]} alt={""} className="w-full sm:w-auto max-h-80 object-cover z-10 rounded-lg shadow-lg cursor-none"/>
                                <div className="flex flex-col gap-1.5 text-left sm:text-right">
                                    <h3 className="text-2xl text-white font-medium">{item[1]}</h3>
                                    <p className="text-md text-white/30 max-w-160">{item[2]}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))
                }

                {hovered && (
                    <motion.div
                        initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}}
                        id="cursor-custom" className="fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 bg-white/15 border border-white/10 backdrop-blur-2xl rounded-3xl p-3">
                        <ArrowUpRight width={20} height={20} color={"white"} />
                    </motion.div>
                )}
            </section>

            <section id="approach" className="flex flex-col gap-15 p-10">
                <motion.div
                    initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.7, ease: "easeInOut"}}
                    className="flex flex-col gap-3">
                    <h1 className="text-6xl font-medium text-white">Our Approach</h1>
                    <p className="text-white/30 text-lg max-w-210">The following shows our creative processes, on how we start on the idea, all the way to the finished result.</p>
                </motion.div>

                <hr className="text-white/10" />

                <div className="w-full h-fit flex flex-col gap-3">
                    {
                        steps.map((step, index) => (
                            <motion.div
                                initial={{opacity: 0}} whileInView={{opacity: 1}}
                                key={index}
                                className="w-full h-fit p-6 bg-white/5 rounded-lg flex flex-col items-center cursor-pointer"
                                animate={{}}
                                transition={{duration: 0.4}}
                                onClick={() => setActive(active === index ? null : index)}
                                onMouseEnter={() => setActive(index)}
                                onMouseLeave={() => setActive(null)}
                            >
                                <div className="w-full h-fit flex flex-row justify-between items-center">
                                    <div className="flex flex-row gap-3.5 items-center">
                                        <Icon icon={step[1]} width={25} height={25} color={"white"} />
                                        <h1 className="text-2xl text-white">{step[0]}</h1>
                                    </div>

                                    <motion.div animate={{rotate: active === index ? 90 : 0}} transition={{ease: "easeInOut"}}>
                                        <Icon icon={"akar-icons:chevron-right-small"} width={25} height={25} color={"gray"} />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: active === index ? "auto" : 0,
                                        opacity: active === index ? 1 : 0
                                    }}
                                    transition={{duration: 0.4, ease: "easeInOut"}}
                                    className="w-full overflow-hidden"
                                >
                                    <p className="text-white/50 text-base pt-4">{step[2]}</p>
                                </motion.div>
                            </motion.div>
                        ))
                    }
                </div>
            </section>

            <section id="worked_with" className="flex flex-col gap-15 p-10">
                <motion.div
                    initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.7, ease: "easeInOut"}}
                    className="flex flex-col gap-3">
                    <h1 className="text-6xl font-medium text-white">Who've We Worked With</h1>
                    <p className="text-white/30 text-lg max-w-210">The following shows the people and companies that we have worked with.</p>
                </motion.div>

                <div className="w-full h-fit grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {
                        worked_with.map((item, index) => (
                            <motion.div
                                initial={{opacity: 0}} whileInView={{opacity: 1}} whileHover={{opacity: 0.7}}
                                key={index} className="bg-white/5 w-fit h-fit flex flex-row gap-3 p-3.5 pr-5 rounded-xl items-center cursor-pointer">
                                <img src={item[0]} alt="" className="w-15" />
                                <h3 className="text-2xl text-white">{item[1]}</h3>
                            </motion.div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}





