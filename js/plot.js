const Plotly = require('plotly.js');

function plot(data, colorCode, type){
  if(!type){
    plot2D(data, colorCode, 'lines');
  }
  else {
    plot3Dmesh(data, colorCode);
  }
}

function plot2D(data, colorCode, type){
  var x = [];
  var y = [];
  data.forEach(function(d){
    x.push(d[0]);
    y.push(d[1]);
  });

  console.log(x);
  console.log(y);
  var input = [{
    x: x, y: y, type: type, marker: {
      color: colorCode
    },
    line: {
      color: colorCode
    }
  }];

  var layout = {
    showlegend: false,
    xaxis: {
      type: 'linear',
      autorange: true
    },
    yaxis: {
      type: 'linear',
      scaleanchor: "x",
      autorange: true
    }
  };

  Plotly.react('plot-wrapper',input, layout);
}

function plot3Dmesh(data, colorCode) {
  a=[]; b=[]; c=[];
  data.forEach(function(d){
    a.push(Number(d[0]) + Math.random());
    b.push(Number(d[1]) + Math.random());
    c.push(Number(d[2]) + Math.random());
  });
  a.pop();
  b.pop();
  c.pop();

  var input = [
    {
      opacity: 0.8,
      color: 'rgb(300,100,200)',
      type: 'mesh3d',
      x: a,
      y: b,
      z: c
    }
  ];

  // var layout = {
  //   showlegend: false,
  //   xaxis: {
  //     type: 'linear',
  //     autorange: true
  //   },
  //   yaxis: {
  //     type: 'linear',
  //     scaleanchor: "x",
  //     autorange: true
  //   },
  //   zaxis: {
  //     type: 'linear',
  //     scaleanchor: "x",
  //     autorange: true
  //   }
  // };

  Plotly.newPlot('plot-wrapper', input);
}

module.exports.plot = function (data, colorCode, type) {
  plot(data, colorCode, type);
}
