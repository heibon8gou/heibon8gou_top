import Link from "next/link";
import { Github } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-md">
            <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6 lg:px-8">
                <Link href="/" className="group flex items-center gap-2">
                    <div className="text-sm font-semibold tracking-wide text-gray-900 transition-opacity hover:opacity-70">
                        HEIBON8GOU
                    </div>
                </Link>

                <nav className="flex items-center gap-6">
                    <a
                        href="https://github.com/heibon8gou"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 transition-colors hover:text-gray-900"
                        aria-label="GitHub"
                    >
                        <Github className="h-5 w-5" />
                    </a>
                </nav>
            </div>
        </header>
    );
}
