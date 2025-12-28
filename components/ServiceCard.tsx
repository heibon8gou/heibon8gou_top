import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react"; // Simpler icons
import { Service } from "@/data/services";

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-gray-200/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-200/60">
            <div>
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-gray-900 transition-colors group-hover:bg-gray-100">
                        <Sparkles className="h-5 w-5 stroke-[1.5]" />
                    </div>
                    {service.isComingSoon && (
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                            Coming Soon
                        </span>
                    )}
                </div>

                <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">
                    {service.name}
                </h3>
                <p className="mb-8 text-base leading-relaxed text-gray-500">
                    {service.description}
                </p>
            </div>

            <div className="mt-auto">
                {service.isComingSoon ? (
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-300 cursor-not-allowed">
                        <span>In Development</span>
                    </div>
                ) : (
                    <Link
                        href={service.url}
                        className="inline-flex items-center gap-2 text-sm font-medium text-lab-accent transition-opacity hover:opacity-80"
                    >
                        Open Project
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                )}
            </div>
        </div>
    );
}
