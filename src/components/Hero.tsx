import Image from "next/image";
import Container from "./Container";
import heroImg from "../../public/img/banner.png";
import bancoPan from "../../public/img/brands/bancopan.svg";

export default function Hero() {
  return (
    <>
      <div className="bg-gradient-to-r from-orange-500 to-orange-700">
        <Container className="flex flex-wrap">
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Crédito Consignado
              </h1>
              <p className="py-5 text-xl leading-normal text-white lg:text-xl xl:text-2xl dark:text-gray-300">
                Uma linha de crédito rápida, com taxas incomparaváveis
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="">
              <Image
                src={heroImg}
                width="616"
                height="617"
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Conheça nossos parceiros
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Image src={bancoPan} alt={""} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
