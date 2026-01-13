import { Separator } from "./ui/separator"

export default function Footer() {
    return (
        <footer className="w-full border-t bg-background py-6">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0 px-4 md:px-8 max-w-screen-2xl">
                <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Oliver Carney. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/olivecarney"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        GitHub
                    </a>
                    <Separator orientation="vertical" className="h-4" />
                    <a
                        href="https://linkedin.com/in/oliver-carney"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        LinkedIn
                    </a>
                    <Separator orientation="vertical" className="h-4" />
                    <a
                        href="mailto:oliver@carney.dev"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}
