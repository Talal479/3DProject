import * as SPLAT from "gsplat";

// Create scene, camera, and renderer
const scene = new SPLAT.Scene();
const camera = new SPLAT.Camera();
const renderer = new SPLAT.WebGLRenderer();
const controls = new SPLAT.OrbitControls(camera, renderer.canvas);

// Load and render the .splat file
async function loadSplatFile() {
    const url = "./src/example.splat"; // Ensure this path is correct and relative
    await SPLAT.Loader.LoadAsync(url, scene, () => {
        console.log('Splat file loaded successfully');
    });
    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };
    animate();
}

// Call the function to load and render the .splat file
loadSplatFile();

