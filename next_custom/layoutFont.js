import React from "react";
import GoogleFonts from "next-google-fonts";
import Head from "next/head";
import { NextScript } from "next/document";
// const LayoutFont = ({ children }) => {
//   return (
//     <div>
//       <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=fallback" />
//       {children}
//     </div>
//   );
// };
const LayoutFont = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          media="print"
          onload="this.media='all'"
        />

        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          />
        </noscript>
      </Head>
      {children}
    </div>
  );
};

export default LayoutFont;
