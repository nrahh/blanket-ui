import {motion} from "motion/react";

export default function About() {
    return (
        <div className="w-full h-fit min-h-300 flex flex-col p-10 pt-30 items-center gap-15">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full items-start flex flex-col gap-3"
            >
                <h1 className="text-6xl font-medium text-white">About Us</h1>
                <p className="text-white/30 text-lg max-w-210">
                    A quick paragraph on who we are.
                </p>
            </motion.div>

            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.1}} className="pt-15 w-full text-center text-white/60 max-w-300">We are Blanket.ink. We have two members with both members having 6+ years of experience on designing UI and 2+ years of creating websites. The main software we use in UI design mainly is Figma. For websites what we use include Framer and WebStorm. Our main goal is to deliver amazing designs/websites catered to their liking. </motion.p>
        </div>
    )
}