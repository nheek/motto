import { Html, Head, Main, NextScript } from "next/document";
import {Providers} from "../app/providers";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>{"Motto - your virtual friend"}</title>
        <meta
          name="description"
          content="Motto - your virtual friend"
        />
        <meta
          name="keywords"
          content="motto, ai friend, virtual friend, nheek, motto nheek, motto ai, motto friend"
        />
      </Head>
      <body>
        <Providers>
          <Main />
          <NextScript />
        </Providers>
      </body>
    </Html>
  );
}
