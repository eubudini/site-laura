import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Sobre from "./components/Sobre";
import Metricas from "./components/Metricas";
import Resultados from "./components/Resultados";
import Portfolio from "./components/Portfolio";
import Internacional from "./components/Internacional";
import Clientes from "./components/Clientes";
import Servicos from "./components/Servicos";
import Processo from "./components/Processo";
import Planos from "./components/Planos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Sobre />
        <Metricas />
        <Resultados />
        <Portfolio />
        <Internacional />
        <Clientes />
        <Servicos />
        <Processo />
        <Planos />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
