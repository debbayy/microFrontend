import Head from "next/head";
import Luigi from "../components/luigi";
import styles from "../styles/Home.module.css";
import Mario from "../../micro-front-end-activate/components/mario";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Microfrontend Demo App 2</title>
        <meta name="description" content="This is an app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Mario />
      <Luigi />
    </div>
  );
}
