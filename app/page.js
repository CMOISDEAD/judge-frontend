import { Banner } from "../components/Banner";
import { Challenges } from "../components/Challenges";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="container mx-auto">
        <Challenges />
      </div>
      <Footer />
    </main>
  );
}
