import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mb-12 border-l-4 border-lab-accent pl-6">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              LABORATORY
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/60">
              Experimental grounds for new ideas and digital services.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-white/40">
          © {new Date().getFullYear()} HEIBON8GOU. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
