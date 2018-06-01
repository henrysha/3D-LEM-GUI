/* module imports */
const THREE = require('three');
const {ipcRenderer} = require('electron');

/**
 * createCanvas
 * DESCRIPTION: create new canvas for threejs.
 * INPUT: canvasId - css id for canvas
 * OUTPUT: threejs canvas element
 * RETURN: none
 */
function createCanvas(canvasId){
    var scene = new THREE.Scene();
    var width = document.getElementById(canvasId).innerWidth;
    var height = document.getElementById(canvasId).innerHeight;
  
    var camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
    
    var renderer = new THREE.WebGLRenderer();
    
    renderer.setSize( width, height );
    document.getElementById(canvasId).appendChild( renderer.domElement );
}

/* module exports */
module.exports.createCanvas = ipcRenderer.sendToHost(createCanvas());

