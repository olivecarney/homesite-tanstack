import { motion } from "framer-motion";
import { timelineData } from "../data/timeline";

export default function Timeline() {
    const items = timelineData;

    return (
        <section id="timeline" className="py-20 bg-muted/30">
            <div className="container px-4 mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Experience</h2>
                    <p className="text-muted-foreground text-lg">My academic journey and professional milestones.</p>
                </div>

                <div className="relative border-l border-muted-foreground/30 ml-4 md:ml-6 space-y-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot */}
                            <span className="absolute left-0 -translate-x-1/2 top-1 h-5 w-5 md:h-6 md:w-6 rounded-full border-4 border-background bg-primary" />

                            <div className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
                                <span className="inline-flex items-center justify-center p-2 rounded-md bg-secondary/50 text-secondary-foreground w-fit">
                                    {item.icon}
                                </span>
                                <span className="text-sm font-semibold text-primary/80 uppercase tracking-wider">
                                    {item.date}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                            <div className="text-lg font-medium text-muted-foreground mb-2">{item.subtitle}</div>
                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
