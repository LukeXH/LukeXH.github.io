// import { Papa } from './papaparse.min.js';

const myHeading = document.querySelector("h1");
function init() {
    Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vTFJB7a5dn5_7bGGFsqexf1rBmKPWBBD73QrZ3mqrD8JS_MxH3SQursVmM-bZo-p3DzeODhQ8w1c6Ha/pub?output=csv', {
    download: true,
    header: true,
    complete: function(results) {
      var data = results.data
      console.log(data)
    }
  })
}
window.addEventListener('DOMContentLoaded', init);

// const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world I GUESS!";
