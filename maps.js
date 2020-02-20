
var bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: '[20, 30]', //this didn't change the size when I altered the numbers even though the documentation seemed to require it
    iconAnchor: '[22, 28]' //same as above
})

let bridges = [ //array of bridge names, coordinates, spans, and city/state
    {'name': "Mackinac Bridge", 'coordinates': [45.8174, -84.7278], 'span': 1158.0, 'city/state': 'Mackinaw and St Ignace, MI'},
    {'name': "Golden Gate Bridge", 'coordinates': [37.8199, -122.4783], 'span': 1280.2, 'city/state': 'San Francisco and Marin, CA'},
    {'name': "George Washington Bridge", 'coordinates': [40.8517, -73.9527], 'span': 1067.0, 'city/state': 'New York, NY and New Jersey, NJ'},
    {'name': "Tacoma Narrows Bridge", 'coordinates': [47.2690, -122.5517], 'span': 853.44, 'city/state': 'Tacoma and Kitsap, WA'},
    {'name': "Verrazano-Narrows Bridge", 'coordinates': [40.6066, -74.0447], 'span': 1298.4, 'city/state': 'New York, NY'},
] 
    
let zoomLevel = 3   //zoom to scale of US

// Create the map 
let map = L.map('bridge-map').setView(bridges[0].coordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy;  <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2xhcmFsIiwiYSI6ImNqcmdwenViYTAwcHQ0Ym5yYmZ1Z3E2bjgifQ.QQfUvVaqPsWb_jJbP2gvHg'
}).addTo(map)

let bridgeMarker = 0; //initialize variable

bridges.forEach(function(bridge){
    bridgeMarker = L.marker(bridge.coordinates, {icon: bridgeIcon}) //set coordinates and icon
                    .bindPopup("<b>" + bridge.name + "</b><br>Span: " + bridge.span + "m") //set message with name and span
                    .addTo(map) //place marker on map
})
