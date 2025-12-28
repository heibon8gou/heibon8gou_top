import Link from "next/link";
import { ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-gray-200/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-200/60">

            {/* Decorative background for empty state */}
            <div className="absolute right-0 top-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-gray-50/50 blur-3xl transition-colors group-hover:bg-gray-100/50" />

            <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-gray-900 transition-colors group-hover:bg-gray-100">
                        {service.isComingSoon ? <AlertCircle className="h-5 w-5 stroke-[1.5]" /> : <Sparkles className="h-5 w-5 stroke-[1.5]" />}
                    </div>
                    {service.isComingSoon && (
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                            開発中
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

            <div className="relative z-10 mt-auto">
                {service.isComingSoon ? (
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-300 cursor-not-allowed">
                        <span>準備中...</span>
                    </div>
                ) : (
                    <Link
                        href={service.url}
                        className="inline-flex items-center gap-2 text-sm font-bold text-lab-accent transition-opacity hover:opacity-80"
                    >
                        プロジェクトを見る
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                )}
            </div>
        </div>
    );
}
