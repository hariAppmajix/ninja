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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />
      </Head>
      {children}
    </div>
  );
};

export default LayoutFont;
