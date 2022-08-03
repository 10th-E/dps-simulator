var scene, renderer, camera;
var controls;

init();
animate();

function init() {
	renderer = new THREE.WebGLRenderer( {antialias: true} );
	renderer.setSize (window.innerWidth, window.innerHeight);
	document.body.appendChild (renderer.domElement);
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 10000);
	camera.position.y = 160;
	camera.position.z = 400;
	camera.lookAt (new THREE.Vector3(0,0,0));
	controls = new THREE.OrbitControls (camera, renderer.domElement);
	controls.enableDamping = true;
	controls.dampingFactor = 0.25;
	controls.enableZoom = true;
	controls.autoRotate = false;
}
function animate(){
	controls.update();
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}