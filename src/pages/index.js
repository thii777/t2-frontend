import Head from "next/head";
import styles from "../styles/Home.module.css";

import BasicButtons from "../components/atoms/buttons/BasicButtons";
import BasicTextFields from "../components/atoms/inputs/BasicTextFields";
import Main from "./main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> T2 créditos </title>{" "}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />
      </main>
    </div>
  );
}
