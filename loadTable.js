function init(){Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTFJB7a5dn5_7bGGFsqexf1rBmKPWBBD73QrZ3mqrD8JS_MxH3SQursVmM-bZo-p3DzeODhQ8w1c6Ha/pub?output=csv",{download:!0,header:!0,complete:function(e){var o=e.data;console.log(o)}})}const myHeading=document.querySelector("h1");window.addEventListener("DOMContentLoaded",init),myHeading.textContent="Hello world I GUESS!";