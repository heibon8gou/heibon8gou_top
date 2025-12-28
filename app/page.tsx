import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            アイデアを形にする、
            <br className="sm:hidden" />
            個人の実験室。
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-gray-500 md:mt-8 md:text-xl md:leading-8">
            生活を少し便利にするWebサービスを、
            <br className="hidden sm:block" />
            ここから発信します。
          </p>
        </section>

        {/* Services Grid */}
        <section className="bg-gray-50 py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-400 lg:px-8">
          <span>© {new Date().getFullYear()} Heibon8gou. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600 transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-gray-600 transition-colors">利用規約</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
