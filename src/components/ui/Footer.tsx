import {Link} from "react-router-dom";

const footer_sections = [
    {
        title: "Explore",
        links: [
            ["Home", "/"],
            ["Designs", "/designs"],
            ["About", "/about"]
        ]
    },
    {
        title: "Information",
        links: [
            ["Legal", "/legal"],
            ["FAQ", "/faq"],
            ["Contact Us", "/contact"]
        ]
    }
];

export default function Footer() {
    return (
        <footer className="w-full h-fit flex flex-col px-5 sm:px-10 pt-10 sm:pt-12 pb-5 sm:pb-6 bg-white/5">
            <div className="w-full grid grid-cols-2 gap-8 sm:gap-10 pb-12 sm:pb-16">
                {footer_sections.map((section) => (
                    <div key={section.title} className="flex flex-col gap-4 sm:gap-5">
                        <h3 className="text-white/35 text-sm">{section.title}</h3>

                        <div className="flex flex-col gap-3">
                            {section.links.map(([label,path]) => (
                                <Link
                                    key={label}
                                    to={path}
                                    className="w-fit text-white/75 hover:text-white transition-colors text-sm"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full flex flex-col gap-3 overflow-hidden">
                <h1 className="w-full text-[clamp(2.5rem,13.5vw,14vw)] leading-[0.9] tracking-[-0.075em] font-medium text-white whitespace-nowrap">
                    Blanket.ink
                </h1>

                <div className="w-full flex flex-col sm:flex-row justify-between gap-3 sm:gap-2 pt-5 sm:pt-6 border-t border-white/10">
                    <p className="text-white/30 text-xs">© {new Date().getFullYear()} Blanket.ink. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}