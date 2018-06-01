/* module imports */
const THREE = require('three');

/* canvas Id */
const canvasId = 'three-canvas';

var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
var camera;
document.addEventListener('DOMContentLoaded',function(){

    var width = document.getElementById(canvasId).clientWidth;
    var height = document.getElementById(canvasId).clientHeight;
    console.log('scene prepared');
    camera = new THREE.PerspectiveCamera( 45, width / height, 1, 500 );
    camera.position.set( 0, 0, 100 );
    camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
    console.log('camera setup');
    renderer.setSize( width, height );
    document.getElementById(canvasId).appendChild( renderer.domElement );
    console.log('render prepared');

});

var drawLine = function(vertices, colorCode){
    var material = new THREE.LineBasicMaterial({color: colorCode});

    var geometry = new THREE.Geometry();
    console.log(vertices);
    vertices.forEach(function(v){
        if (v[2] == undefined){
            geometry.vertices.push(new THREE.Vector3(v[0],v[1],0));
        }
        else{
            geometry.vertices.push(new THREE.Vector3(v[0],v[1],v[2]));
        }
    });

    var line = new THREE.Line( geometry, material );

    scene.add( line );
    renderer.render( scene, camera );
};


