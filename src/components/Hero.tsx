import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <HeroHighlight containerClassName="h-[40rem] flex items-center justify-center pt-20">
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
                className="px-4 md:px-8 text-center max-w-3xl mx-auto mt-20"
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tighter">
                    carney
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-8">
                    Student / Developer
                </p>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                    Building <Highlight>premium web experiences</Highlight>.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="lg" className="group border-primary/20 hover:border-primary/50" asChild>
                            <Link to="/#projects">
                                View Projects
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="lg" asChild className="border-primary/20 hover:border-primary/50">
                            <a href="/OliverCarneyCV.pdf" download>
                                <Download className="mr-2 w-4 h-4" />
                                <span className="mr-1">Download CV</span>
                            </a>
                        </Button>
                    </motion.div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-8">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-foreground">
                            <a href="https://github.com/olivecarney" target="_blank" rel="noreferrer">
                                <Github className="w-5 h-5" />
                                <span className="sr-only">GitHub</span>
                            </a>
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-foreground">
                            <a href="https://linkedin.com/in/oliver-carney" target="_blank" rel="noreferrer">
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-foreground">
                            <a href="mailto:oliver@carney.dev">
                                <Mail className="w-5 h-5" />
                                <span className="sr-only">Email</span>
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </HeroHighlight>
    );
}
