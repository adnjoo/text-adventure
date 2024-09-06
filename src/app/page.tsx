import Game from "@/Game";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Game />
      </main>
      <Footer />
    </div>
  );
}
