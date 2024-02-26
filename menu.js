"use strict";
let statistics;
fetch('data/globals.json').then(response => response.json()).then(jsonData => { statistics = jsonData.stats; });
console.log(statistics);
window.onload = () => {
};
