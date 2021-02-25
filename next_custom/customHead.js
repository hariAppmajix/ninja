import React, { Component } from "react";
import { Head } from "next/document";
import * as fs from "fs";
import { join } from "path";

class HeadCustom extends Head {
  getCssLinks(files) {
    const { assetPrefix } = this.context;
    const allFiles = [
      ...new Set([...files.allFiles, ...files.sharedFiles, ...files.pageFiles]),
    ];
    const cssFiles =
      allFiles && allFiles.length
        ? allFiles.filter((f) => /\.css$/.test(f))
        : [];
    const cssLinkElements = [];
    const gCss = fs.readFileSync(
      join(process.cwd(), "styles", "globals.css"),
      "utf-8"
    );

    // const fontCss = fs.readFileSync(
    //   join(process.cwd(), "styles", "fonts.css"),
    //   "utf-8"
    // );

    // cssLinkElements.push(
    //   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    // );

    // cssLinkElements.push(
    //   <link
    //     rel="preload"
    //     as="style"
    //     href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
    //     rel="stylesheet"
    //   />
    // );

    // cssLinkElements.push(
    //   <link
    //     rel="stylesheet"
    //     media="print"
    //     onload="this.media='all'"
    //     href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
    //     rel="stylesheet"
    //   />
    // );

    // cssLinkElements.push(
    //   <noscript
    //     dangerouslySetInnerHTML={{
    //       __html: `<link
    //   rel="stylesheet"
    //   href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
    // />`,
    //     }}
    //   />
    // );

    // cssLinkElements.push(
    //   <style
    //     key="fonts"
    //     data-href={join(process.cwd(), "styles", "fonts.css")}
    //     dangerouslySetInnerHTML={{
    //       __html: fontCss,
    //     }}
    //   />
    // );
    cssLinkElements.push(
      <style
        key="global"
        data-href={join(process.cwd(), "styles", "globals.css")}
        dangerouslySetInnerHTML={{
          __html: gCss,
        }}
      />
    );
    cssFiles.forEach((file) => {
      cssLinkElements.push(
        <link
          key={file}
          nonce={this.props.nonce}
          rel="stylesheet"
          href={`${assetPrefix}/_next/${encodeURI(file)}`}
          crossOrigin={"anonymous"}
        />
      );
    });

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadMainLinks() {
    return [];
  }

  getPreloadDynamicChunks() {
    return [];
  }
}

export default HeadCustom;
