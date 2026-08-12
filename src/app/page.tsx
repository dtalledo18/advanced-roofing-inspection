import Header from "@/shared/components/Header";
import Hero from "@/features/Hero";
import Reviews from "@/features/Reviews";
import Contact from "@/features/Contact";
import Footer from "@/shared/components/Footer";

export default function Home() {
  return (
      <main className="relative min-h-screen w-full bg-black overflow-x-hidden">
        <Header/>
        <Hero/>
        <Reviews/>
        <Contact/>
          <Footer/>
      </main>
  );
}