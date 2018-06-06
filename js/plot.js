const Plotly = require('plotly.js');

function plot(data, colorCode, type){
  if(data[0].length == 2){
    plot2D(data, colorCode, 'lines');
  }
  else {
    plot3D(data, colorCode, 'surface');
  }
}

function plot2D(data, colorCode, type){
  var x = [];
  var y = [];
  data.forEach(function(d){
    x.push(d[0]);
    y.push(d[1]);
  });

  var input = [{
    x: x, y: y, type: type, marker: {
      color: colorCode
    },
    line: {
      color: colorCode
    }
  }];

  Plotly.plot('plot-wrapper',input);
}

function plot3D(data, colorCode, type) {
  var x = [];
  var y = [];
  var z = [];
  data.forEach(function(d){
    x.push(d[0]);
    y.push(d[1]);
    z.push(d[2]);
  });

  var input = [
    {
      opacity: 0.8,
      
      type: type,
      x: x,
      y: y,
      z: z
    }
  ];

  Plotly.newPlot('plot-wrapper',input);
}

module.exports.plot = plot(data, colorCode, type);