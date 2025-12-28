import Link from "next/link";
import { Github } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-lab-dark/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="group flex items-center gap-2">
                    <div className="text-xl font-bold tracking-widest text-[#ededed] transition-colors group-hover:text-lab-accent">
                        HEIBON8GOU
                    </div>
                    <div className="h-2 w-2 rounded-full bg-lab-accent shadow-[0_0_8px_var(--color-lab-accent)]" />
                </Link>

                <nav className="flex items-center gap-6">
                    <a
                        href="https://github.com/heibon8gou"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 transition-colors hover:text-lab-accent"
                        aria-label="GitHub"
                    >
                        <Github className="h-6 w-6" />
                    </a>
                </nav>
            </div>
        </header>
    );
}
