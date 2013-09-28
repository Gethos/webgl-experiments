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
  var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 100, 100), scene);


  var triangle = drawTriangle(scene);
  var square = drawSquare(scene);

  triangle.position.x = -1.5;
  square.position.x = 1.5;

  return scene;
}

function drawTriangle(scene) {
  var triangle = new BABYLON.Mesh('triangle', scene);

  var positions = [
    0, 1, 0,
    -1, -1, 0,
    1, -1, 0
  ];

  var normals = [
    1, 1, 1,
    1, 1, 1,
    1, 1, 1
  ];

  var colors = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ];

  var indices = [];
  indices.push(0);
  indices.push(1);
  indices.push(2);

  triangle.setVerticesData(positions, BABYLON.VertexBuffer.PositionKind);
  triangle.setVerticesData(normals, BABYLON.VertexBuffer.NormalKind);
  triangle.setVerticesData(colors, BABYLON.VertexBuffer.ColorKind);
  triangle.setIndices(indices);

  return triangle;
}

function drawSquare(scene) {
  var square = new BABYLON.Mesh('square', scene);

  var positions = [
    -1, -1, 0,
    1, -1, 0,
    1, 1, 0,
    -1, 1, 0
  ];

  var normals = [
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1
  ];

  var colors = [
    0.5, 0.5, 1,
    0.5, 0.5, 1,
    0.5, 0.5, 1,
    0.5, 0.5, 1
  ];

  var indices = [];
  indices.push(0);
  indices.push(1);
  indices.push(2);

  indices.push(0);
  indices.push(2);
  indices.push(3);

  square.setVerticesData(positions, BABYLON.VertexBuffer.PositionKind);
  square.setVerticesData(normals, BABYLON.VertexBuffer.NormalKind);
  square.setVerticesData(colors, BABYLON.VertexBuffer.ColorKind);
  square.setIndices(indices);

  return square;
}