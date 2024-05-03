// Add console.log to check to see if our code is working.
console.log("working");


//create map
var map = L.map('map').setView[17.195, -88.687],

const map = L.map('map').setView([17.195, -88.687], 8);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



//create tile layer and add basemap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);






/* js rewritten to fix map functon
Lines 1- 40 work to create basemap -AG 
Cross referenced with code in shared folder
Complete and map is still working*/
