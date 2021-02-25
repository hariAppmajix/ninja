import React from "react";

import Head from "next/head";

// const LayoutFont = ({ children }) => {
//   return (
//     <div>
//       <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=fallback" />
//       {children}
//     </div>
//   );
// };

let hydrated = false;
const LayoutFont = ({ children }) => {
  const hydratedRef = React.useRef(false);
  const [, rerender] = React.useState(false);

  React.useEffect(() => {
    if (!hydratedRef.current) {
      hydrated = true;
      hydratedRef.current = true;
      rerender(true);
    }
  }, []);

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          media="print"
          onload="this.media='all'"
        />
        {/* <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          media={!hydrated ? "print" : "all"}
        /> */}
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
