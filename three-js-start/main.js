let scene, camera, renderer, cube;

function init() {
  // Preparing canvas

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // antialias is for more smooth edges of the object
  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  // Start working with canvas

  const geometry = new THREE.BoxGeometry( 2, 2, 2 );
  // var material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
  const texture = new THREE.TextureLoader().load('textures/floor.jpg');
  const material = new THREE.MeshBasicMaterial( {map: texture} );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  // By default three.js will put camera inside scene on the same position
  // so to see scene we need to change position of camera

  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
