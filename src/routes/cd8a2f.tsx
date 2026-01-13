import { createFileRoute } from '@tanstack/react-router'
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { Mail, Unlock } from "lucide-react";

export const Route = createFileRoute('/cd8a2f')({
    component: SecretHash,
})

function SecretHash() {
    return (
        <HeroHighlight containerClassName="h-screen flex items-center justify-center">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="px-4 md:px-8 text-center max-w-2xl mx-auto"
            >
                <div className="flex justify-center mb-8">
                    <div className="p-3 bg-primary/10 rounded-full">
                        <Unlock className="w-8 h-8 text-primary" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                    Access Granted.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                    You've found the backdoor. As a reward for your curiosity, use the code below for <Highlight>20% off</Highlight> your next web design project.
                </p>

                <div className="bg-card border border-border/50 rounded-lg p-6 mb-10 max-w-sm mx-auto shadow-sm">
                    <p className="text-sm text-muted-foreground mb-2 uppercase tracking-widest font-semibold">Secret Code</p>
                    <code className="text-2xl font-mono font-bold text-primary block selection:bg-primary/20">
                        SUDO_CARNEY
                    </code>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="group" asChild>
                        <a href="mailto:oliver@carney.dev?subject=Project Inquiry (Code: SUDO_CARNEY)">
                            <Mail className="mr-2 h-4 w-4" />
                            Claim Discount
                        </a>
                    </Button>
                </motion.div>
            </motion.div>
        </HeroHighlight>
    )
}
