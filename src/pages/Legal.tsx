import { motion } from "motion/react";

const lastUpdated = "November 3, 2026";
const contactEmail = "contact@blanket.ink";

const sections = [
    {
        title: "1. Agreement",
        body: [
            "These terms apply to your use of the Blanket.ink website and to any design or development work that Blanket.ink (\"we\", \"us\", \"our\") carries out for you (\"the client\", \"you\"). By using this website or by asking us to work on a project, you agree to these terms.",
            "If you and Blanket.ink agree to different terms in writing for a specific project, those written terms take priority over this page for that project.",
        ],
    },
    {
        title: "2. Our Services",
        body: [
            "Blanket.ink creates user interfaces and websites for clients. The scope of each project, including pages, features, and timelines, is agreed with you before work begins. Anything outside that agreed scope may be declined, delayed, or quoted separately.",
        ],
    },
    {
        title: "3. Free Services and Future Pricing",
        body: [
            "At this time, Blanket.ink provides its services free of charge. This is not a promise that services will remain free.",
            "We may introduce paid services, fees, or subscriptions in the future. If we do, we will tell you before any charge applies, and nothing will be charged to you without your clear agreement. Work already delivered free of charge will not be billed retroactively.",
        ],
    },
    {
        title: "4. Client Content and Responsibilities",
        body: [
            "You are responsible for all text, images, logos, data, and other material you give us (\"Client Content\"). By supplying Client Content, you confirm that you own it or have the right to use it, and that it does not infringe anyone else's rights or break any applicable law.",
            "You agree to give us the information and feedback we reasonably need in a timely manner. Delays on your side may delay the project. We are not responsible for problems that result from Client Content or from changes you or others make to the finished work.",
        ],
    },
    {
        title: "5. Ownership of Work",
        body: [
            "Once a project is delivered, you own the final designs and website produced specifically for you (\"Final Work\"), together with your Client Content.",
            "Blanket.ink keeps ownership of its reusable components, including code snippets, UI components, animations, templates, tools, frameworks, and methods that we create or use across multiple projects (\"Reusable Components\"). Where Reusable Components are part of your Final Work, we grant you a non-exclusive, worldwide, perpetual license to use them as part of that Final Work. You may not resell or distribute Reusable Components on their own.",
            "Third-party assets, such as fonts, icons, libraries, and stock media, remain subject to their own licenses.",
        ],
    },
    {
        title: "6. Partners and Showcasing Clients",
        body: [
            "We may list clients as partners on our website. For this purpose, we may display your name and brand logo only after you have agreed to it.",
            "We will not publish screenshots, mockups, or other depictions of your website or interface designs in our portfolio or marketing without your prior approval. You can give or refuse this approval for each project.",
            "You may ask us at any time to remove your logo or name from our website. We will remove it within a reasonable time after receiving your request. We cannot control copies that others have already made or cached by third parties.",
            "Showing your logo does not mean that you endorse Blanket.ink, or that we are affiliated with you beyond the work done together.",
        ],
    },
    {
        title: "7. No Guarantees or Warranties",
        body: [
            "Because our services are currently provided free of charge, they are provided \"as is\" and \"as available\", without warranties of any kind, whether express or implied. This includes any warranty of quality, fitness for a particular purpose, accuracy, availability, or non-infringement.",
            "We do not guarantee that the Final Work will be free of errors, work without interruption, suit every device or browser, or achieve any particular business result such as traffic, sales, or search ranking. You are responsible for testing the Final Work before relying on it.",
        ],
    },
    {
        title: "8. Limitation of Liability",
        body: [
            "To the fullest extent permitted by applicable law, Blanket.ink and its members will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, or goodwill, arising from or related to our services or this website.",
            "Where liability cannot be excluded, our total liability for any claim is limited to the amount you paid us for the services giving rise to that claim. If the services were free, our liability is limited to the extent permitted by law.",
        ],
    },
    {
        title: "9. Ending a Project",
        body: [
            "We may pause or end any project, or stop providing our services, at any time and for any reason, including a lack of capacity, lack of response, or concerns about the content or purpose of the project. Where reasonably possible, we will give you notice and hand over the Final Work completed up to that point.",
            "You may also end a project at any time by telling us in writing. Sections that by their nature should continue after a project ends, including ownership, no warranties, and limitation of liability, will continue to apply.",
        ],
    },
    {
        title: "10. Privacy",
        body: [
            "We only collect the information needed to communicate with you and carry out your project, such as your name, email address, and project materials. We do not sell your personal information. We keep it for as long as we need it for the project or as the law requires, and you can ask us to access or delete it by contacting us.",
        ],
    },
    {
        title: "11. Acceptable Use",
        body: [
            "You agree not to use our website or services for anything unlawful, harmful, or misleading, or to try to disrupt, copy, or gain unauthorized access to our website or systems.",
        ],
    },
    {
        title: "12. Resolving Disputes",
        body: [
            "If a disagreement comes up, please contact us first. We will make a good-faith effort to settle it directly and fairly before either side takes further action.",
        ],
    },
    {
        title: "13. Changes to These Terms",
        body: [
            "We may update this page from time to time. The date of the latest update is shown at the top. Changes apply to future use of the website and to projects started after the update, and continued use of our services means you accept the updated terms.",
        ],
    },
    {
        title: "14. Contact",
        body: [
            `Questions about these terms, or requests to add or remove your logo, can be sent to ${contactEmail}.`,
        ],
    },
];

export default function Legal() {
    return (
        <div className="w-full h-fit min-h-300 flex flex-col p-10 pt-30">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="flex flex-col gap-3"
            >
                <h1 className="text-6xl font-medium text-white">Legal</h1>
                <p className="text-white/30 text-lg max-w-210">
                    The following includes our terms of service, how we handle
                    ownership and partner showcasing, and how we treat your
                    information. Last updated {lastUpdated}.
                </p>
            </motion.div>

            <motion.div
                initial={{opacity: 0}} animate={{opacity: 1}}
                className="flex flex-col gap-10 mt-16 max-w-210">
                {sections.map((section) => (
                    <section key={section.title} className="flex flex-col gap-3">
                        <h2 className="text-xl font-bold text-white">
                            {section.title}
                        </h2>
                        {section.body.map((paragraph, i) => (
                            <p
                                key={i}
                                className="text-base font-normal not-italic leading-relaxed text-white/60"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </section>
                ))}
            </motion.div>
        </div>
    );
}