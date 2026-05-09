import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Metodologia from "./components/Metodologia";
import Prova from "./components/prova";
import Portfolio from "./components/Portfolio";
import Planos from "./components/Planos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <a href="#hero" className="skip-to-content">Pular para o conteúdo</a>
      <Header />
      <main id="main">
        <Hero />
        <Manifesto />
        <Metodologia />
        <Prova />
        <Portfolio />
        <Planos />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
