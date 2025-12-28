import Link from "next/link";
import { ArrowUpRight, FlaskConical } from "lucide-react"; // Flask icon fitting for a lab
import { Service } from "@/data/services";

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lab-accent/50 hover:shadow-[0_0_20px_var(--color-lab-accent-glow)]">
            {/* Background decorations */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lab-accent/5 blur-3xl transition-opacity duration-300 group-hover:bg-lab-accent/10" />

            <div>
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-lab-accent group-hover:bg-lab-accent/10">
                        <FlaskConical className="h-5 w-5" />
                    </div>
                    {service.isComingSoon && (
                        <span className="rounded-full border border-lab-accent/30 bg-lab-accent/10 px-3 py-1 text-xs font-medium text-lab-accent shadow-[0_0_10px_rgba(57,255,20,0.2)]">
                            Coming Soon...
                        </span>
                    )}
                </div>

                <h3 className="mb-2 text-xl font-bold tracking-tight text-white group-hover:text-lab-accent transition-colors">
                    {service.name}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-white/60">
                    {service.description}
                </p>
            </div>

            <div className="mt-auto">
                {service.isComingSoon ? (
                    <div className="flex items-center gap-2 text-sm font-medium text-white/40 cursor-not-allowed">
                        <span>Development in progress</span>
                    </div>
                ) : (
                    <Link
                        href={service.url}
                        className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-lab-accent"
                    >
                        Open Project
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                )}
            </div>
        </div>
    );
}
