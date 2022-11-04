import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";

import { benefit } from "../components/data";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import ProductsAndService from "../components/ProductsAndService";

export default function Home() {
  return (
    <>
      <Head>
        <title>T2 - Creditos</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        title="Produtos e Serviços">
      </SectionTitle>
      <ProductsAndService />
      <SectionTitle
        title="Vantagens">
      </SectionTitle>
      <Benefits data={benefit} />
      <Footer />
    </>
  );
}
