//create map
var map = L.map('map').setView[17.195, -88.687],

//create tile layer and add basemap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




// Load GeoJSON file
fetch('maya_sites.geojson')
  .then(response => response.json())
  .then(data => {
    // Load CSV file
    d3.csv('radiocarbon1.csv').then(csvData => {
      // Create an object to store the radiocarbon data
      var radiocarbonData = {};
      csvData.forEach(row => {
        radiocarbonData[row.site_name] = {
          num_of_dates: row.num_of_dates,
          date_range: row.date_range,
          time_period: row.time_period
        };
      });

      // Create GeoJSON layer with popups
      L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
          var siteData = radiocarbonData[feature.properties.name];
          layer.bindPopup(`
            <strong>${feature.properties.name}</strong><br>
            Occupation: ${siteData.time_period}<br>
            Radiocarbon dates: ${siteData.num_of_dates}<br>
            Date range: ${siteData.date_range}<br>
            Description: ${feature.properties.description}
          `);
        }
      }).addTo(map);
    });
  });


/* js rewritten to fix map functon
Lines 1- 40 work to create basemap -AG 
Cross referenced with code in shared folder
Complete and map is still working*/