import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Refining the Ordinary.
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-medium leading-8 text-gray-500">
            A minimalist laboratory for experimental web services.
            <br className="hidden sm:block" />
            Reliable, clean, and forward-thinking.
          </p>
        </section>

        {/* Services Grid */}
        <section className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-xs font-medium text-gray-400 lg:px-8">
          © {new Date().getFullYear()} HEIBON8GOU. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
