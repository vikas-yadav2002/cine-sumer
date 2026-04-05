import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Navbar */}

      <Navbar />

      {/* FIX: offset for fixed navbar */}

      <main className="flex-1 pt-24">

        {children}

      </main>

      {/* Footer */}

      <Footer />

    </div>
  );
}