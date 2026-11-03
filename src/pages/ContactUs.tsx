import {motion} from "motion/react";
import {useState} from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
    const [form,setForm] = useState({
        name: "",
        email: "",
        subject: "",
        projectDetails: "",
        projectType: "ui-design"
    });

    const [status,setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    function updateField(field: string,value: string) {
        setForm((current) => ({
            ...current,
            [field]: value
        }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setStatus("loading");

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    reply_to: form.email,
                    subject: form.subject,
                    project_type: form.projectType,
                    message: form.projectDetails
                },
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                }
            );

            setStatus("success");

            setForm({
                name: "",
                email: "",
                subject: "",
                projectDetails: "",
                projectType: "ui-design"
            });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    }

    return (
        <div className="w-full h-fit min-h-300 flex flex-col p-5 sm:p-10 pt-20 sm:pt-30 gap-10 sm:gap-15">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="flex flex-col gap-3"
            >
                <h1 className="text-4xl sm:text-6xl font-medium text-white">Have a project in mind?</h1>
                <p className="text-white/30 text-lg max-w-210">
                    Tell us what you're looking to build. We'd love to hear about it.
                </p>
            </motion.div>

            <motion.form
                onSubmit={handleSubmit}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                className="w-full sm:w-fit h-fit flex flex-col p-4 sm:p-5 bg-white/5 rounded-lg gap-5"
            >
                <div className="w-full flex flex-col sm:flex-row gap-3">
                    <div className="w-full sm:w-70 h-fit flex flex-col gap-3">
                        <h3 className="text-white/70 text-lg">Name</h3>
                        <input
                            type="text"
                            maxLength={100}
                            required
                            value={form.name}
                            onChange={(e) => updateField("name",e.target.value)}
                            className="w-full bg-black/38 text-white p-2.5 rounded-md outline-none"
                        />
                    </div>

                    <div className="w-full sm:w-70 h-fit flex flex-col gap-3">
                        <h3 className="text-white/70 text-lg">Email</h3>
                        <input
                            type="email"
                            maxLength={100}
                            required
                            value={form.email}
                            onChange={(e) => updateField("email",e.target.value)}
                            className="w-full bg-black/38 text-white p-2.5 rounded-md outline-none"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row gap-3">
                    <div className="w-full sm:w-70 h-fit flex flex-col gap-3">
                        <h3 className="text-white/70 text-lg">Subject</h3>
                        <textarea
                            required
                            value={form.subject}
                            onChange={(e) => updateField("subject",e.target.value)}
                            className="w-full bg-black/30 text-white p-2.5 rounded-md outline-none"
                        />
                    </div>

                    <div className="w-full sm:w-70 h-fit flex flex-col gap-3">
                        <h3 className="text-white/70 text-lg">Project Details</h3>
                        <textarea
                            required
                            value={form.projectDetails}
                            onChange={(e) => updateField("projectDetails",e.target.value)}
                            className="w-full bg-black/38 text-white p-2.5 rounded-md outline-none"
                        />
                    </div>
                </div>

                <div className="w-full h-fit flex flex-col gap-3">
                    <h3 className="text-white/70 text-lg">Project Type</h3>
                    <select
                        value={form.projectType}
                        onChange={(e) => updateField("projectType",e.target.value)}
                        className="w-full bg-black/38 text-white h-10"
                    >
                        <option value="ui-design">UI Design</option>
                        <option value="website-design">Website Design</option>
                        <option value="website-redesign">Website Redesign</option>
                        <option value="website-development">Website Development</option>
                        <option value="custom-components">Custom Components</option>
                        <option value="other/not-sure">Other/ Not Sure</option>
                    </select>
                </div>

                <hr className="text-white/15" />

                {status === "success" && (
                    <p className="text-white/50 text-sm">Your message has been sent successfully.</p>
                )}

                {status === "error" && (
                    <p className="text-white/50 text-sm">Failed to send your message. Please try again.</p>
                )}

                <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    initial={{opacity: 1}}
                    whileHover={{opacity: 0.7}}
                    className="w-full bg-white p-2 text-black rounded-md font-medium text-lg cursor-pointer disabled:opacity-50"
                >
                    {status === "loading" ? "Sending..." : status === "success" ? "Sent" : "Send"}
                </motion.button>
            </motion.form>
        </div>
    )
}