import Header from "../components/Header";
import Footer from "../components/Footer";
// import Logo from "../public/inzama-ahmad.jpg";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <NextSeo
          title="Inzamam Ahmad"
          titleTemplate="Inzamam Ahmad"
          defaultTitle="Inzamam Ahmad"
          description="A full stack developer. Learning Blockchain and developing something new. Blockchain consultant. Love to write about technical concepts."
          canonical="https://www.avneesh.tech/"
          openGraph={{
            url: "https://www.builders22.com/",
            title: "Inzamam Ahmad",
            description:
              "A full stack developer. Learning Blockchain and developing something new. Blockchain consultant. Love to write about technical concepts.",
            images: [
              {
                url: "../public/inzama-ahmad.jpg",
                width: 800,
                height: 420,
                alt: "Inzamam Ahmad",
              },
            ],
          }}
          twitter={{
            handle: "@IInzamamAhmad",
            site: "https://twitter.com/IInzamamAhmad",
            cardType: "summary_large_image",
          }}
        />

        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
