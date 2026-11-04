import { motion } from "motion/react"
import { Routes, Route, useNavigate } from "react-router-dom"

const manifests = import.meta.glob("../designs/*/manifest.json", {
    eager: true,
    import: "default"
})

const images = import.meta.glob("../designs/*/image.png", {
    eager: true,
    query: "?url",
    import: "default"
})

const demos = import.meta.glob("../designs/*/demo.tsx", {
    eager: true
})

const designs = Object.entries(manifests).map(([path, manifest]: [string, any]) => {
    const folder = path.replace("/manifest.json", "")
    const id = folder.split("/").pop()

    return {
        ...manifest,
        image: images[`${folder}/image.png`] as string,
        demo: demos[`${folder}/demo.tsx`] as any,
        id
    }
})

function DesignsGrid() {
    const navigate = useNavigate()

    return (
        <div className="w-full h-fit min-h-300 flex flex-col p-10 pt-30 gap-15">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="flex flex-col gap-3"
            >
                <h1 className="text-6xl font-medium text-white">Designs</h1>
                <p className="text-white/30 text-lg max-w-210">
                    A collection of some of the designs that we have created.
                </p>
            </motion.div>

            <hr className="text-white/10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {designs.map((design, index) => (
                    <motion.div
                        key={design.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.08,
                            ease: "easeOut"
                        }}
                        onClick={() => {
                            if (design["create-demo-router"]) {
                                navigate(`/designs/${design.id}`)
                            }
                        }}
                        className={`flex flex-col gap-4 min-w-0 ${
                            design["create-demo-router"] ? "cursor-pointer" : ""
                        }`}
                    >
                        <div className="w-full aspect-video rounded-xl bg-white/5 overflow-hidden">
                            <img
                                src={design.image}
                                alt={design.title}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="flex flex-col gap-0">
                            <h2 className="text-xl font-medium text-white">
                                {design.title}
                            </h2>
                            <p className="text-sm text-white/40">
                                {design.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default function Designs() {
    return (
        <Routes>
            <Route path="/" element={<DesignsGrid />} />

            {designs
                .filter(design => design["create-demo-router"] && design.demo?.default)
                .map(design => (
                    <Route
                        key={design.id}
                        path={design.id!}
                        element={<design.demo.default />}
                    />
                ))}
        </Routes>
    )
}