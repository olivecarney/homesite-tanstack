import { motion } from "framer-motion";

export default function Clients() {
    // Placeholder data for clients.
    // Ideally this would be logos or testimonials.
    const clients = [
        { name: "Client A", description: "E-commerce Implementation" },
        { name: "Client B", description: "Portfolio Design" },
        { name: "Client C", description: "Web Application Development" },
    ];

    return (
        <section id="clients" className="py-20 bg-background">
            <div className="container px-4 mx-auto max-w-screen-xl">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Past Clients & Work</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Helping businesses and individuals build their digital presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-lg border border-border/50 bg-card hover:bg-muted/50 transition-colors text-center"
                        >
                            <h3 className="font-semibold text-lg mb-2">{client.name}</h3>
                            <p className="text-muted-foreground text-sm">{client.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
