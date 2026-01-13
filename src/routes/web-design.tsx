import { createFileRoute } from '@tanstack/react-router'


import { Button } from "../components/ui/button"
import { HoverEffect } from "../components/ui/card-hover-effect"
import { ArrowRight, Mail } from "lucide-react"

import { clientWork } from "../data/clients"

export const Route = createFileRoute('/web-design')({
    component: WebDesign,
})

function WebDesign() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="container px-4 mx-auto max-w-screen-xl mb-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                    Web Design Services
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                    I craft stunning, high-performance websites tailored to your brand. From concept to deployment, I ensure every detail is perfect.
                </p>

                <Button size="lg" className="group" asChild>
                    <a href="mailto:oliver@carney.dev">
                        <Mail className="mr-2 h-4 w-4" />
                        Get in Touch
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </Button>
            </section>

            {/* Past Work Section */}
            <section className="container px-4 mx-auto max-w-screen-xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-100 dark:to-neutral-400 mb-4 inline-block">
                        Selected Works
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Some of the projects I've delivered for clients.
                    </p>
                </div>

                <HoverEffect items={clientWork} />
            </section>
        </div>
    )
}

