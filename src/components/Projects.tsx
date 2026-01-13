import { HoverEffect } from "./ui/card-hover-effect";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-background/50">
            <div className="container px-4 mx-auto max-w-screen-xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-100 dark:to-neutral-400 mb-4 inline-block">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A selection of my recent work in web development and software engineering.
                    </p>
                </div>

                <HoverEffect items={projects} />
            </div>
        </section>
    );
}
