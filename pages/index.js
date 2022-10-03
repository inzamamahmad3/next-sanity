import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Content from "../components/Content";
import CTA from "../components/CTA";
import Testimonial from "../components/Testimonial";
import Article from "../components/Article";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Builders</title>
        <meta
          name="web 3 content reading and writing content"
          content="Generated for builder"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦄</text></svg>"
        ></link>
      </Head>
      <Hero />
      <Content />
      <CTA />
      <Article />
      <Testimonial />
    </div>
  );
}
