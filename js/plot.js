const Plotly = require('plotly.js');

function plot(data, colorCode, type){
  if(data[0].length == 2){
    plot2D(data, colorCode, type);
  }
  else {
    plot3D(data, colorCode, type);
  }
}

function plot2D(data, colorCode, type){
  var x = [];
  var y = [];
  data.forEach(function(d){
    x.push(d[0]);
    y.push(d[1]);
  });
  Plotly.plot('plot-wrapper',[{
    x: x, y: y, type: type, marker: {
      color: colorCode
    },
    line: {
      color: colorCode
    }
  }]);
}