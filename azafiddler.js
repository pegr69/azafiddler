// ==UserScript==
// @name			Avanza fiddler
// @description		Some Avanza site tweaks to ease the trading day
// @author			Anonymous
// @include			https://www.avanza.se/*
// @exclude			https://www.xxxxxxxxx.se/private*
// @version 0.0.2
// @namespace https://greasyfork.org/users/noone
// ==/UserScript==

// Test
window.addEventListener("load", init, false);

// Adds a simple external tweak to the Avanza links.
////
function init()
{
  console.info("Hi Avanza!");
  // Tweak all links to external target.
  tweaklinks(document);
}

function tweaklinks(doc)
{
  // find all links, add external attribute if not set.
  for (var a,i=0; a=doc.getElementsByTagName("a")[i]; ++i) {
    if (a.target == "") {
        a.target = a.title;
    }
  }
}
