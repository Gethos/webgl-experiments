var scene;

window.onload = function(){
  var canvas = document.getElementById("canvas");

  // Check support
  if (!BABYLON.Engine.isSupported()) {
    window.alert('Browser not supported');
  } else {
    // Babylon
    var engine = new BABYLON.Engine(canvas, true);

    //Creating scene
    scene = drawStuff(engine);

    scene.activeCamera.attachControl(canvas);


    // Once the scene is loaded, just register a render loop to render it
    engine.runRenderLoop(function () {
      scene.render();
    });

    // Resize
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }

};

function drawStuff(engine) {
  //Creation of the scene
  var scene = new BABYLON.Scene(engine);
  //scene.clearColor = new BABYLON.Color3(0, 0, 0);

  var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 0, -10), scene);
  var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 100, 100), scene);


  //var pyramid = drawPyramid(scene);
  //pyramid.rotation = new BABYLON.Vector3(0, -Math.PI/4, 0);
  var cube = drawCube(scene);
  //cube.rotation = new BABYLON.Vector3(Math.PI/4, 0, 0);

  //pyramid.position.x = -1.5;
  cube.position.x = 1.5;

  return scene;
}

function drawPyramid(scene) {
  var pyramid = new BABYLON.Mesh('pyramid', scene);

  var positions = [
    // front face
    0, 1, 0,
    -1, 0, -1,
    1, 0, -1,

    // right face
    0, 1, 0,
    1, 0, -1,
    1, -1, -1,

    // back face
    0, 1, 0,
    1, -1, -1,
    -1, -1, -1
  ];

  var normals = [
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1
  ];

  var colors = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1,

    1, 0, 0,
    0, 1, 0,
    0, 0, 1,

    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ];

  var indices = [];
  indices.push(0);
  indices.push(1);
  indices.push(2);

  indices.push(3);
  indices.push(4);
  indices.push(5);

  indices.push(6);
  indices.push(7);
  indices.push(8);

  pyramid.setVerticesData(positions, BABYLON.VertexBuffer.PositionKind);
  pyramid.setVerticesData(normals, BABYLON.VertexBuffer.NormalKind);
  pyramid.setVerticesData(colors, BABYLON.VertexBuffer.ColorKind);
  pyramid.setIndices(indices);

  return pyramid;
}

function drawCube(scene) {
  var cube = new BABYLON.Mesh('cube', scene);

  var positions = [

    // front face
    -1, -1, 0,
    1, -1, 0,
    1, 1, 0,
    -1, 1, 0
    /*
     // right face
     1, 1, -1,
     1, 1, 1,
     1, -1, 1,
     1, -1, -1,

     //back face
     1, 1, 1
     -1, 1, 1,
     -1, -1, 1,
     1, -1, 1,

     // left face
     -1, 1, -1,
     -1, 1, 1,
     -1, -1, 1,
     -1, -1, -1  */
  ];

  var normals = [
    0, 0, 1/*,
     1, 0, 0,
     0, 0, 1,
     -1, 0, 0 */
    /*,
     0, 1, 0,
     0, -1, 0*/
  ];

  var indices = [];
  for (var i = 0; i <= 0; i++) {
    indices.push(i+0);
    indices.push(i+1);
    indices.push(i+2);

    indices.push(i+0);
    indices.push(i+2);
    indices.push(i+3);
  }

  cube.setVerticesData(positions, BABYLON.VertexBuffer.PositionKind);
  cube.setVerticesData(normals, BABYLON.VertexBuffer.NormalKind);
  cube.setIndices(indices);

  return cube;
}