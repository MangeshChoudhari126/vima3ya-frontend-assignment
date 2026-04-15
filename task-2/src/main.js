import "./style.css";

const start = performance.now();

// 🔥 Lazy load Three.js
const THREE = await import("three");
const { GLTFLoader } = await import(
  "three/examples/jsm/loaders/GLTFLoader.js"
);
const { DRACOLoader } = await import(
  "three/examples/jsm/loaders/DRACOLoader.js"
);
const { OrbitControls } = await import(
  "three/examples/jsm/controls/OrbitControls.js"
);

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(2, 2, 5);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas"),
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Draco Loader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
);

// GLTF Loader
const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);

// Load Model
loader.load(
  "/model/model-compressed.glb",

  (gltf) => {
    scene.add(gltf.scene);

    // Hide loader
    document.getElementById("loader").style.display = "none";

    // Log load time
    console.log(
      `Model loaded in ${(performance.now() - start).toFixed(2)}ms`
    );
  },

  (xhr) => {
    if (xhr.total) {
      const percent = (xhr.loaded / xhr.total) * 100;
      document.getElementById("loader").innerText =
        `Loading... ${percent.toFixed(0)}%`;
    }
  },

  (error) => {
    console.error("Error loading model:", error);
  }
);

// Animation
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});