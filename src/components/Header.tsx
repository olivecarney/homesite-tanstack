import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Terminal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { useState } from "react";
import { MenuToggle } from "./ui/menu-toggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          carney.dev
        </Link>

        <nav className="flex items-center gap-4">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 group">
                <MenuToggle isOpen={isOpen} />
                <span className="hidden sm:inline">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={12} className="w-56">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/#projects" className="cursor-pointer w-full">
                  Projects
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/#timeline" className="cursor-pointer w-full">
                  Timeline
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/#contact" className="cursor-pointer w-full">
                  Contact
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/web-design" className="cursor-pointer w-full font-medium">
                  Web Design
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="https://terminal.carney.dev" target="_blank" rel="noreferrer" className="flex items-center cursor-pointer w-full text-muted-foreground hover:text-foreground">
                  <Terminal className="mr-2 h-4 w-4" />
                  Terminal Mode
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
