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

BABYLON.Mesh.CreatePyramid4 = function (name, baseSize, height, scene, updatable) {
  var pyramid = new BABYLON.Mesh(name, scene);

  // Adding faces
  var positions = [
    // Front face
    0,  height/2,  0,
    baseSize/2, -height/2, baseSize/2,
    -baseSize/2, -height/2, baseSize/2,

    // Right face
    0, height/2, 0,
    baseSize/2, -height/2, -baseSize/2,
    baseSize/2, -height/2, baseSize/2,

    // Back face
    0, height/2,  0,
    -baseSize/2, -height/2, -baseSize/2,
    baseSize/2, -height/2, -baseSize/2,

    // Left face
    0, height/2,  0,
    -baseSize/2, -height/2, baseSize/2,
    -baseSize/2, -height/2, -baseSize/2,

    // Bottom face
    -baseSize/2, -height/2, baseSize/2,
    baseSize/2, -height/2, baseSize/2,
    baseSize/2, -height/2, -baseSize/2,
    -baseSize/2, -height/2, -baseSize/2
  ];

  var normals = [
    height, baseSize/2, 0,
    height, baseSize/2, 0,
    height, baseSize/2, 0,

    0, baseSize/2, height,
    0, baseSize/2, height,
    0, baseSize/2, height,

    -height, baseSize/2, 0,
    -height, baseSize/2, 0,
    -height, baseSize/2, 0,

    0, baseSize/2, -height,
    0, baseSize/2, -height,
    0, baseSize/2, -height,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0
  ];

  var indices = [];
  var uvs = [];
  var i = 0;
  while (i < 12) {
    indices.push(i+0);
    uvs.push(1.0, 1.0);
    indices.push(i+1);
    uvs.push(0.0, 1.0);
    indices.push(i+2);
    uvs.push(0.0, 0.0);
    i = i+3;
  }

  indices.push(12);
  indices.push(13);
  indices.push(14);

  indices.push(12);
  indices.push(14);
  indices.push(15);

  uvs.push(1.0, 1.0);
  uvs.push(0.0, 1.0);
  uvs.push(0.0, 0.0);
  uvs.push(1.0, 0.0);

  pyramid.setVerticesData(positions, BABYLON.VertexBuffer.PositionKind, updatable);
  pyramid.setVerticesData(normals, BABYLON.VertexBuffer.NormalKind, updatable);
  pyramid.setVerticesData(uvs, BABYLON.VertexBuffer.UVKind, updatable);
  pyramid.setIndices(indices);

  return pyramid;
}

function drawStuff(engine) {
  var scene = new BABYLON.Scene(engine);
  //scene.clearColor = new BABYLON.Color3(0, 0, 0);

  var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(50, 100, 0), scene);
  var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, new BABYLON.Vector3.Zero(), scene);

  var pyramid = BABYLON.Mesh.CreatePyramid4("pyramid", 10, 20, scene);

  var formX = BABYLON.Mesh.CreatePyramid4("formX", 1, 2, scene);
  var formY = BABYLON.Mesh.CreatePyramid4("formY", 2, 4, scene);
  var formZ = BABYLON.Mesh.CreatePyramid4("formZ", 4, 8, scene);

  formX.position.x = 20;
  formY.position.y = 20;
  formZ.position.z = 20;

  rotate(pyramid);

  return scene;
}

function rotate(element) {
  var degree = 0;

  setInterval(function() {
    var value = Math.PI * degree++/180;
    element.rotation = new BABYLON.Vector3(0, -value, 0);
    if (degree === 360) {
      degree = 0;
    }
  }, 10);
}