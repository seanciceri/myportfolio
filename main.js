// 1️⃣ Inizializza la scena
const scene = new THREE.Scene();

// 2️⃣ Crea la camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5); // Posiziona la camera davanti all'oggetto

// 3️⃣ Renderer (lo aggiungiamo al body)
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha true per sfondo trasparente
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.getElementById('3d-container').appendChild(renderer.domElement);

// 4️⃣ Aggiungiamo la luce
const light = new THREE.AmbientLight(0xffffff, 1); // Luce ambiente
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

// 5️⃣ Carichiamo il modello GLB
const loader = new THREE.GLTFLoader();
loader.load('public/models/ai.glb', function (gltf) {
    const model = gltf.scene;
    model.scale.set(12, 12, 12); // Rende il modello più grande
    model.position.set(0, -1, -3); // Posiziona il modello sotto il carosello
    scene.add(model);

    // Funzione di animazione per farlo fluttuare
    function animateModel() {
        requestAnimationFrame(animateModel);
        model.rotation.y += 0.005; // Rotazione lenta
        model.position.y += Math.sin(Date.now() * 0.001) * 0.005; // Effetto fluttuante
        renderer.render(scene, camera);
    }

    animateModel();
}, undefined, function (error) {
    console.error('Errore nel caricamento del modello:', error);
});

// 6️⃣ Funzione di rendering
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// 7️⃣ Rendi la scena responsive
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});