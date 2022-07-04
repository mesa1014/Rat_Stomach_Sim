window.onload = function() {
  // Default json is fiber
  // window.left_view_str = "./data/fibre_lm_1.json";
  // window.right_view_str = "./data/fibre_cm_1.json";
  // showAll();

  // progress bar
  var progressBar = document.getElementById("progress");
  var display = document.getElementById("display");

  function download(dataPath) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataPath, true);
    xhr.responseType = "blob";
    xhr.onprogress = function(e) {
      if (e.lengthComputable) {
        progressBar.max = e.total;
        progressBar.value = e.loaded;
      }
    };
    xhr.onloadstart = function(e) {
      progressBar.value = 0;
    };
    xhr.onloadend = function(e) {
      progressBar.value = e.loaded;
    };
    xhr.send(null);
  }
  download("/data/data_sw.zip");

  // function showAll()
  // {
  // Render models
  // Left view
  var container = document.getElementById( 'LM' );
  document.body.appendChild( container );
  var zincRenderer = new Zinc.Renderer(container, window);
  zincRenderer.initialiseVisualisation();
  var scene = zincRenderer.createScene("stomach");
  scene.loadViewURL("./data/stomachjs_sw_view.json");
  scene.loadMetadataURL("./data/sw_stomach_1.json");
  scene.loadMetadataURL("./data/sw_pylorus_1.json");
  scene.loadMetadataURL("./data/sw_esophagus_1.json");
  zincRenderer.setCurrentScene(scene);
  zincRenderer.animate();
  var scene_lm = scene.getThreeJSScene();
  const directionalLight_lm = new THREE.DirectionalLight( 0xffffff, 0.6 );
  scene_lm.add( directionalLight_lm );



  // View all or reset view
  function viewAll()
  {
    zincRenderer.viewAll();
  }
  // }
  // GUI
  var gui = new dat.GUI( { autoPlace: false, width: 300 } );
  var obj = { add :function(){ viewAll(); }};
  gui.add(obj,'add').name("Reset View");

  // Put GUI on top left
  var customContainer = document.getElementById('gui');
  customContainer.appendChild(gui.domElement);

  // buttons
  parameters = {
    a: false,
    b: false,
    c: true
  }
  var pos1 = gui.add(parameters, 'a').name('Fiber Orientation').listen().onChange(function(){setChecked("a")});
  var neg1 = gui.add(parameters, 'b').name('Muscle Thickness').listen().onChange(function(){setChecked("b")});
  var neu1 = gui.add(parameters, 'c').name('Slow Wave Simulation').listen().onChange(function(){setChecked("c")});

  // Buttons behaviour
  function setChecked( prop ){
    for (let param in parameters){
      parameters[param] = false;
    }
    parameters[prop] = true;
    switch (prop) {

      case "a":
      // location.reload();
      // console.log("Fiber");
      window.open("index.html", "_self");
      break;

      case "b":
      // console.log("Thickness");
      window.open("thickness.html", "_self");
      break;

      case "c":
      // console.log("Slow Wave");
      window.open("sw.html", "_self");
      break;

      default:
      break;

    }
  }



}
