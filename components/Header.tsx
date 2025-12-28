import Link from "next/link";
import { Mail } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                <Link href="/" className="group flex items-center gap-2">
                    <div className="text-lg font-bold tracking-wider text-gray-900 transition-opacity hover:opacity-70">
                        HEIBON8GOU
                    </div>
                </Link>

                <nav className="flex items-center gap-6">
                    <a
                        href="#"
                        className="group flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
                        aria-label="Contact"
                    >
                        <Mail className="h-4 w-4" />
                        <span className="hidden sm:inline">お問い合わせ</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}
