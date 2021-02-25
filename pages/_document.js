import Document, { Html, Head, Main, NextScript } from "next/document";
import HeadCustom from "../next_custom/customHead.js";
import NextScriptCustom from "../next_custom/customScript.js";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <HeadCustom />
        <body>
          <Main />
          <NextScriptCustom />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
