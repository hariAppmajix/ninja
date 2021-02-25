// import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutFonts from "../next_custom/layoutFont";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutFonts>
      <Component {...pageProps} />
    </LayoutFonts>
  );
}
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

export default MyApp;
