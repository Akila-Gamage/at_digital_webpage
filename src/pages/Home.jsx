import Faq from "../components/faq/Faq";
import Hero from "../components/Hero";
import Service from "../components/service/Service";

export default function Home() {
  return (
    <section>
      <Hero />
      <Service />
      <Faq />
    </section>
  );
}
