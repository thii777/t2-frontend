import Head from "next/head";
import Container from "../../components/Container";
import Details from "../../components/Details";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import bancoPan from "../../../public/img/brands/bancopan.svg";

export default function Partners() {
  
  return (
    <>
      <Head>
        <title>T2 - Parters</title>
      </Head>
      <Navbar />
      <Container>
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap justify-center gap-5 mt-5 md:justify-around">
            <Details
              value={23000}
              partner="Banco Pan"
              installments={12}
              imageLink={bancoPan}
              fees="6.99"
            />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
