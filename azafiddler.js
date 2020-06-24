// ==UserScript==
// @name			  Avanza fiddler
// @description	Some Avanza site tweaks to ease the trading day
// @author			pegr69
// @include			https://www.avanza.se/*
// @version     0.7
// @namespace https://greasyfork.org/users/593500
// ==/UserScript==

//
window.addEventListener("load", init, false);

// Adds a simple external tweak to the Avanza links.
// Minor fixes for order window

function init()
{
  console.info("Init Avanza Fiddler.");
  // Tweak all links to external target.
  tweaklinks(document);
  // Fix order window
  fixordervindow(document);
}

// Resize and remove unnecessary crap
function fixordervindow(doc)
{
    if (window.name === "orderWindow") {
        console.info("Avanza Orderwindow");
        window.resizeTo(858,774);
        let azaheader=doc.getElementsByTagName("aza-header")[0];
        let azamenu=doc.getElementsByTagName("aza-menu")[0];
        let azapmenu=doc.getElementsByTagName("aza-personal-menu")[0];
        let azafooter=doc.getElementsByTagName("aza-footer")[0];

        azaheader.style.display="none";
        azamenu.style.display="none";
        azapmenu.style.display="none";
        azafooter.style.display="none";
    }
}

// Add an external target to all valid title links

function tweaklinks(doc)
{
    // Do not touch these link titles
  let ignoreTitles=["Lägg till","Ta Bort"];

  // find all links, add external attribute if not set.
  for (let a,i=0; a=doc.getElementsByTagName("a")[i]; ++i) {
    if (a.target === "") {
      if (a.title === "") {
        // Do nothing for now
      }else {
          let ignore = false;
          ignoreTitles.forEach(function(value){
              let t = a.title.search(value);
              if (t != -1) {
                  console.info("Ignoring:" + value + " for title:" + a.title);
                  ignore = true;
              }
           });
          if ( ! ignore ) {
              a.target = a.title;
          }
      }
    }
  }
}
