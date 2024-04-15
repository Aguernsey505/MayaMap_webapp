// Create map
var map = L.map('map').setView([16.8235, -88.7601], 8);

// Add basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Load GeoJSON file
fetch('maya_sites.geojson')
  .then(response => response.json())
  .then(data => {
    // Load CSV file
    d3.csv('radiocarbon.csv').then(csvData => {
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