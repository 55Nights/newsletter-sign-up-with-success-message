import Layout from "../components/layout";
import Section from "../components/index";
import styles from "./index.module.css";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <title>
          Frontend Mentor | Newsletter sign-up form with success message
        </title>
      </Head>

      <Section></Section>
    </>
  );
}
