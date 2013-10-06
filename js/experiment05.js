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
  var scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(0, 0, 0);

  var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(50, 100, 0), scene);
  var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, new BABYLON.Vector3.Zero(), scene);

  var cube = BABYLON.Mesh.CreateBox("cube", 30, scene);

  var cubeMaterial = new BABYLON.StandardMaterial("texture1", scene);
  cubeMaterial.diffuseTexture = new BABYLON.Texture("data/05/NeHe.bmp", scene);
  cube.material = cubeMaterial;

  rotate(cube);

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