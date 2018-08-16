const Plotly = require('plotly.js');

const wrapper = document.getElementById('plot-wrapper');

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

  Plotly.react(wrapper,input, layout);
}

function plot3Dmesh(data, colorCode) {
  a=[]; b=[]; c=[];
  data.forEach(function(d){
    a.push(Number(d[0]));
    b.push(Number(d[1]));
    c.push(Number(d[2]));
  });
  a.pop();
  b.pop();
  c.pop();

  var input = [
    {
      opacity: 0.6,
      color: 'rgb(300,100,200)',
      type: 'mesh3d',
      x: a,
      y: b,
      z: c
    }
  ];

   var layout = {
     showlegend: false,
     
     scene: {
       aspectratio:{
         x:1,
         y:1,
         z:1
       },
       xaxis: {
        autorange: true
      },
      yaxis: {
        scaleanchor: "x",
        //autorange: true
      },
      zaxis: {
        scaleanchor: "x",
        //autorange: true
      }
     }
   };

  Plotly.react(wrapper, input, layout);
}

module.exports.plot = function (data, colorCode, type) {
  plot(data, colorCode, type);
}

/** 
 * Resize Plot on window resize
 */
window.addEventListener('resize', function() {
  Plotly.Plots.resize(wrapper);
  console.log('plot resized');
});