var camera, scene, renderer, mesh, material;
init();

function init() {
    // Renderer.
    renderer = new THREE.WebGLRenderer();
    //renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Add renderer to page
    document.body.appendChild(renderer.domElement);

    // Create camera.
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 400;

    // Create scene.
    scene = new THREE.Scene();

    // Create material
    material = new THREE.MeshPhongMaterial();

    // Create cube and add to scene.
    var geometry = new THREE.BoxGeometry(200, 200, 200);
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Create ambient light and add to scene.
    var light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);

    // Create directional light and add to scene.
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Add listener for window resize.
    window.addEventListener('resize', onWindowResize, false);
    
    // Add listener for keyboard
    document.body.addEventListener('keydown', keyPressed, false);
    
    render();

}

function keyPressed(e){
  switch(e.key) {
  	case 'ArrowUp':
    	mesh.rotateX(-0.1);
    	break;
    case 'ArrowDown':
    	mesh.rotateX(0.1);
    	break;
    case 'ArrowLeft':
    	mesh.rotateY(-0.1);
    	break;
    case 'ArrowRight':
    	mesh.rotateY(0.1);
    	break;
  }
  e.preventDefault();
  render();
}


function render(){
	renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
}