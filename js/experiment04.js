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
  scene.clearColor = new BABYLON.Color3(0, 0, 0);

  var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 0, -10), scene);
  var light0 = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(0, -1, 0), scene);

  var pyramid = drawPyramid(scene);
  var cube = drawCube(scene);

  var degree = 0;

  setInterval(function() {
    var value = Math.PI * degree++/180;
    pyramid.rotation = new BABYLON.Vector3(0, value, 0);
    cube.rotation = new BABYLON.Vector3(-Math.PI/12, -value, 0);
    if (degree === 360) {
      degree = 0;
    }
  }, 10);

  pyramid.position.x = -2;
  cube.position.x = 2;

  return scene;
}

function drawPyramid(scene) {
  var pyramid = new BABYLON.Mesh('pyramid', scene);

  var positions = [
    // Front face
    0,  1,  0,
    -1, -1,  1,
    1, -1,  1,

    // Right face
    0,  1,  0,
    1, -1,  1,
    1, -1, -1,

    // Back face
    0,  1,  0,
    1, -1, -1,
    -1, -1, -1,

    // Left face
    0,  1,  0,
    -1, -1, -1,
    -1, -1,  1,

    // Bottom face
    -1, -1, -1,
    1, -1, -1,
    1, -1, 1,
    -1, -1, 1
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
    0, 0, 1,
    0, 1, 0,

    1, 0, 0,
    0, 1, 0,
    0, 0, 1,

    1, 0, 0,
    0, 0, 1,
    0, 1, 0,

    0, 0, 1,
    0, 1, 0,
    0, 0, 1,
    0, 1, 0
  ];

  var indices = [];

  var i = 0;
  while (i < 12) {
    indices.push(i+0);
    indices.push(i+1);
    indices.push(i+2);

    i = i+3;
  }

  indices.push(12);
  indices.push(13);
  indices.push(14);

  indices.push(12);
  indices.push(14);
  indices.push(15);

  pyramid.setVerticesData(positions, BABYLON.VertexBuffer.PositionKind);
  pyramid.setVerticesData(normals, BABYLON.VertexBuffer.NormalKind);
  pyramid.setVerticesData(colors, BABYLON.VertexBuffer.ColorKind);
  pyramid.setIndices(indices);

  return pyramid;
}

function drawCube(scene) {
  var cube = new BABYLON.Mesh('cube', scene);

  var positions = [
    // Front face
    -1, -1, -1,
    1, -1, -1,
    1, 1, -1,
    -1, 1, -1,

    // Right face
    1, -1, 1,
    1, 1, 1,
    1, 1, -1,
    1, -1, -1,

    // Back face
    -1,  1,  1,
    1,  1,  1,
    1, -1,  1,
    -1, -1,  1,

    // Left face
    -1, 1, 1,
    -1, -1, 1,
    -1, -1, -1,
    -1, 1, -1,

    // Top face
    1, 1, -1,
    1, 1, 1,
    -1, 1, 1,
    -1, 1, -1,

    // Bottom face
    -1, -1, 1,
    1, -1, 1,
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

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
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

  var indices = [];

  var i = 0;
  while (i < 24) {
    indices.push(i+0);
    indices.push(i+1);
    indices.push(i+2);

    indices.push(i+0);
    indices.push(i+2);
    indices.push(i+3);

    i = i+4;
  }

  var colors = [
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,

    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    1, 1, 0,
    1, 1, 0,
    1, 1, 0,
    1, 1, 0,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, .2, .6,
    1, .2, .6,
    1, .2, .6,
    1, .2, .6
  ];

  cube.setVerticesData(positions, BABYLON.VertexBuffer.PositionKind);
  cube.setVerticesData(normals, BABYLON.VertexBuffer.NormalKind);
  cube.setVerticesData(colors, BABYLON.VertexBuffer.ColorKind);
  cube.setIndices(indices);

  return cube;
}