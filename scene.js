const renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setSize (window.innerWidth, window.innerHeight);
document.body.appendChild (renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 10000);
camera.position.y = 160;
camera.position.z = 400;
camera.lookAt (new THREE.Vector3(0,0,0));