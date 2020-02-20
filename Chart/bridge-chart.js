let bridges = [ //used the same array as the leaflet program
    {'name': "Mackinac Bridge", 'coordinates': [45.8174, -84.7278], 'span': 1158.0, 'city/state': 'Mackinaw and St Ignace, MI'},
    {'name': "Golden Gate Bridge", 'coordinates': [37.8199, -122.4783], 'span': 1280.2, 'city/state': 'San Francisco and Marin, CA'},
    {'name': "George Washington Bridge", 'coordinates': [40.8517, -73.9527], 'span': 1067.0, 'city/state': 'New York, NY and New Jersey, NJ'},
    {'name': "Tacoma Narrows Bridge", 'coordinates': [47.2690, -122.5517], 'span': 853.44, 'city/state': 'Tacoma and Kitsap, WA'},
    {'name': "Verrazano-Narrows Bridge", 'coordinates': [40.6066, -74.0447], 'span': 1298.4, 'city/state': 'New York, NY'},
] 

var canvas = document.getElementById('bridge-chart')//create canvas
var ctx = canvas.getContext('2d')

var names = [] //initialize arrays for bridge traits
var spans = []

bridges.forEach(function(bridge){ //add info from bridge array into the trait arrays
    names.push(bridge.name)
    spans.push(bridge.span)
})


chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names, //retrieve labels from bridge name array
        datasets: [{
            label: 'Span length',
            data: spans, //retrieve spans from bridge span array
            backgroundColor: ['purple', 'cyan', 'yellow', 'magenta', 'lime']
        }]
    }, options: {
        scales:{
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})