import React from "react";
import { compact, flatten } from "lodash";

import { NextScript } from "next/document";

class NextScriptCustom extends NextScript {
  render() {
    const orgNextScripts = flatten(super.render().props.children);
    const scripts = compact(
      orgNextScripts.map((child) => {
        if (child?.props?.id === "__NEXT_DATA__") {
          return {
            props: { ...child.props },
            content: child.props.dangerouslySetInnerHTML.__html,
          };
        }

        if (child?.type === "script") {
          return {
            props: { ...child.props },
            content: "",
          };
        }

        return null;
      })
    );

    const initialFilterer = (props) =>
      !props.src || !props.src.includes("chunks");
    const initialLoadScripts = scripts.filter(({ props }) =>
      initialFilterer(props)
    );
    const chunkedScripts = scripts.filter(
      ({ props }) => !initialFilterer(props)
    );

    const GA_MEASUREMENT_ID = "UA-54328260-1";
    const jsContent = `    
      var chunkedScripts = ${JSON.stringify(chunkedScripts)};
     
      setTimeout(() => {
        chunkedScripts.map((script) => {
          if (!script || !script.props) return;
          try {
            var scriptTag = document.createElement('script');
  
            scriptTag.src = script.props.src;
            scriptTag.async = script.props.async;
            scriptTag.defer = script.props.defer;
            
            if (script.props.id) scriptTag.id = script.props.id;
            if (script.content) scriptTag.innerHTML = script.content;
            document.body.appendChild(scriptTag);
          }
          catch(err) {
            console.log(err);
          }
        });
      // 1800ms seems like when PageSpeed Insights stop waiting for more js       
      }, 1800);
  `;

    return (
      <>
        {initialLoadScripts.map(({ props }) => (
          <script key={props.id} {...props} src={props.src} />
        ))}

        <script
          id="__NEXT_CUSTOM_SCRIPT_LOADING"
          defer
          dangerouslySetInnerHTML={{ __html: jsContent }}
        />

        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `function downloadGaAtOnload() {
              //GTM init
              var delay = window.CUSTOM_DELAY || window.pageLoadDelay || 0;
              if(!delay) {
                  delay = (typeof PAGE_DELAY_CONFIG === "object" && !isNaN(PAGE_DELAY_CONFIG.gtm))?PAGE_DELAY_CONFIG.gtm:0;
              }
              setTimeout(function() {
                  gtmLoadScript();
              }, delay)
          }
          
          if (window.addEventListener)
              window.addEventListener("load", downloadGaAtOnload, false);
          else if (window.attachEvent)
              window.attachEvent("onload", downloadGaAtOnload);
          else window.onload = downloadGaAtOnload;
      
          function gtmLoadScript() {
              // set user_params.utm_params. This should run before gtm trigger
              //fetchUTMSource();
              (function(w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({'gtm.start':new Date().getTime(),
                              event: 'gtm.js'});
                  var f = d.getElementsByTagName(s)[0],
                          j = d.createElement(s), dl = l != 'user_params' ? '&l=' + l : '';
                  j.async = true;
                  j.rel = 'dns-prefetch';
                  j.src ='//www.googletagmanager.com/gtm.js?id=' + i + dl;
                  f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'UA-54328260-1');
          }`,
          }}
        />
      </>
    );
  }
}

export default NextScriptCustom;
