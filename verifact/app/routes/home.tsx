import type { Route } from "./+types/home";
import Navbar from "./components/landing/lNavbar";
import Hero from "./components/landing/lHero";
import Reason from "./components/landing/lHow";
import Feature from "./components/landing/lWhy";
import Footer from "./components/landing/lFooter";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Verifact - AI Powered News Verification Platform",
    },
    {
      name: "description",
      content: "Welcome to Verifact!",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Reason />
      <Footer />
    </>
  );
}
