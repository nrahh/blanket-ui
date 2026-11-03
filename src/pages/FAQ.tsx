import {motion} from "motion/react";
import {useState} from "react";
import {Icon} from "@iconify/react";

export default function FAQ() {

    const [active, setActive] = useState<number | null>(null);

    const faq = [
        ["What services do you offer?", "We offer UI design, frontend development, and interactive web experiences tailored to the clients needs."],
        ["How does the development process work?", "We begin by designing the complete interface in Figma, then move into React development before presenting a demo to the client."],
        ["Can I request modifications?", "Absolutely. Clients can request modifications after reviewing the demo so we can refine the final result together."]
    ]

    return (
        <div className="w-full h-fit min-h-300 flex flex-col p-10 pt-30 items-center gap-15">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full items-start flex flex-col gap-3"
            >
                <h1 className="text-6xl font-medium text-white">FAQ</h1>
                <p className="text-white/30 text-lg max-w-210">
                    Frequently asked questions about Blanket.ink.
                </p>
            </motion.div>

            <div className="w-full h-fit flex flex-col gap-3">
                {
                    faq.map((item, index) => (
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
                                    <h1 className="text-2xl text-white">{item[0]}</h1>
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
                                <p className="text-white/50 text-base pt-4">{item[1]}</p>
                            </motion.div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}