// const formSteps = document.querySelectorAll(".form-step");
// const nextButton = document.getElementById("nextButton");
// const prevButton = document.getElementById("prevButton");
// const submitButton = document.getElementById("submitButton");
// let currentStep = 0;

// // Show current step
// function showStep() {
//     formSteps.forEach((step, index) => {
//         step.classList.toggle("active", index === currentStep);
//     });

//     // Show/hide buttons
//     prevButton.style.display = currentStep > 0 ? "inline-block" : "none";
//     nextButton.style.display = currentStep < formSteps.length - 1 ? "inline-block" : "none";
//     submitButton.style.display = currentStep === formSteps.length - 1 ? "inline-block" : "none";
// }

// // Next step
// function nextStep() {
//     const inputs = formSteps[currentStep].querySelectorAll("input, select");
//     for (let input of inputs) {
//         if (!input.checkValidity()) {
//             input.reportValidity();
//             return;
//         }
//     }
//     currentStep++;
//     showStep();
// }

// // Previous step
// function prevStep() {
//     currentStep--;
//     showStep();
// }

// function submitStep() {
//     currentStep++;
//     // showStep();
// }

// // Show Face Shape Image
// // function showFaceImage() {
// //     const faceShape = document.getElementById("faceShape").value;
// //     const faceShapeImage = document.getElementById("faceShapeImage");

// //     const faceImages = {
// //         "oval": "https://via.placeholder.com/150?text=Oval+Face",
// //         "round": "https://via.placeholder.com/150?text=Round+Face",
// //         "square": "https://via.placeholder.com/150?text=Square+Face",
// //         "heart": "https://via.placeholder.com/150?text=Heart+Face",
// //         "rectangular": "https://via.placeholder.com/150?text=",
// //         "triangle": "https://via.placeholder.com/150?text="
// //     };

// //     faceShapeImage.src = faceImages[faceShape] || "";
// //     faceShapeImage.style.display = faceShape ? "block" : "none";
// // }

// // Show Body Type Image
// function showBodyImage() {
//     const bodyType = document.getElementById("bodyType").value;
//     const bodyTypeImage = document.getElementById("bodyTypeImage");

//     const bodyImages = {
//         "rectangular": "/static/Screenshot 2025-02-12 130142.png",
//         "trapezoid": "/static/Screenshot 2025-02-12 130148.png",
//         "oval": "/static/Screenshot 2025-02-12 130153.png",
//         "triangle": "/static/Screenshot 2025-02-12 130158.png",
//         "inverted triangle": "/static/Screenshot 2025-02-12 130202.png"
//     };

//     bodyTypeImage.src = bodyImages[bodyType] || "";
//     bodyTypeImage.style.display = bodyType ? "block" : "none";
// }

// // Initialize
// showStep();

// // Form submission

//     document.getElementById("multiStepForm").addEventListener("submit", async (event) => {
//         event.preventDefault();

//         // Collect form data
//         const formData = {
//             name: document.getElementById("name").value,
//             gender: document.getElementById("gender").value,
//             styleType: document.getElementById("styleType").value,
//             bodyType: document.getElementById("bodyType").value,
//             size: document.getElementById("size").value,
//         };

//         // Send form data to backend
//         try {
//             const response = await fetch("http://127.0.0.1:5000/submit", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 alert("Form submitted successfully!");
//             } else {
//                 alert("Error submitting form.");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             alert("Failed to connect to the server.");
//         }
//     });

// -------------------------------------------------------------------x--------------------------------------------------------------------


// Import necessary modules from Three.js
// Import necessary modules from Three.js
// Import necessary components
// import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three/examples/js/loaders/GLTFLoader.js';
// import { alphaT } from 'three/tsl';

// // Initialize the scene, camera, and renderer
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 1.5, 3);
// const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// document.getElementById('avatar-container').appendChild(renderer.domElement);
// // Add directional light to the scene
// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(2, 2, 5).normalize();
// scene.add(directionalLight);

// // Add ambient light for soft lighting
// const ambientLight = new THREE.AmbientLight(0x404040, 2);
// scene.add(ambientLight);

// // Load the GLB model using GLTFLoader
// const loader = new THREE.GLTFLoader();
// loader.load(
//     'https://raw.githubusercontent.com/Stuti0711/3D-Model/main/zhenja.glb', // Path to the avatar.glb file
//     function (gltf) {
//         const model = gltf.scene;
//         model.scale.set(1, 1, 1); // Adjust the scale if needed
//         model.position.set(0, -1, 0); // Adjust the position if needed
//         scene.add(model);

//         console.log("Avatar loaded successfully");
//     },
//     (xhr) => {
//         console.log((xhr.loaded / xhr.total * 100) + '% loaded'); // Log loading progress
//     },
//     (error) => {
//         console.error('An error occurred while loading the avatar:', error);
//     }
// );
// function changeOutfit(outfitUrl) {
//     if (!avatar) {
//         console.error("Avatar not loaded yet!");
//         return;
//     }

//     const loader = new THREE.GLTFLoader();
//     loader.load(outfitUrl, function (gltf) {
//         let outfit = gltf.scene;
//         outfit.name = "outfit";
//         outfit.scale.set(1, 1, 1);
//         outfit.position.set(0, 0, 0);

//         if (currentOutfit) {
//             avatar.remove(currentOutfit);
//         }

//         currentOutfit = outfit;
//         avatar.add(outfit);
//     }, undefined, function (error) {
//         console.error("Error loading outfit:", error);
//     });
// }
// // Set the camera position
// camera.position.z = 3;

// // Add controls for user interaction
// const controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true; // Smooth controls
// controls.dampingFactor = 0.05;
// controls.screenSpacePanning = false;

// // Animation loop to render the scene
// function animate() {
//     requestAnimationFrame(animate);
//     controls.update(); // Update controls
//     renderer.render(scene, camera);
// }

// animate();

// // Handle window resize
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

// init();

// -------------------------------------------------------------------x--------------------------------------------------------------------

// let scene, camera, renderer, avatar, controls, currentOutfit;
//         function init() {
//             scene = new THREE.Scene();
//             camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//             camera.position.set(0, 1, 3);

//             renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//             renderer.setSize(window.innerWidth, window.innerHeight);
//             document.getElementById('avatar-container').appendChild(renderer.domElement);

//             controls = new THREE.OrbitControls(camera, renderer.domElement);
//             controls.enableDamping = true;

//             const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
//             scene.add(light);

//             // Load Avatar
//             loadAvatar('https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/avatar.glb');

//             document.getElementById("hat-button").addEventListener("click", () => {
//                 switchHat("https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/clothes/hat01.obj");
//             });
        
//             document.getElementById("shirt-button").addEventListener("click", () => {
//                 switchShirt("https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/clothes/shirt02.obj");
//             });
        
//             document.getElementById("pants-button").addEventListener("click", () => {
//                 switchPants("https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/clothes/pants01.obj");
//             });
        
//             document.getElementById("shoes-button").addEventListener("click", () => {
//                 switchShoes("https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/clothes/shoes01.obj");
//             });

//             animate();
//         }

//         function loadAvatar(url) {
//             const loader = new THREE.GLTFLoader();
//             loader.load(url, function (gltf) {
//                 if (avatar) scene.remove(avatar);
//                 avatar = gltf.scene;

//                 avatar.scale.set(0.15, 0.15, 0.15);
//                 avatar.traverse((child) => {
//                     if (child.isMesh) {
//                         child.material = new THREE.MeshStandardMaterial({
//                             color: 0xffdbac, // New color (cyan)
//                         });
//                     }
//                 });
//                 avatar.position.set(0, -1, 0);

//                 scene.add(avatar);
//             }, undefined, function (error) {
//                 console.error('Error loading avatar:', error);
//             });
//         }

//         function changeOutfit(outfitUrl) {
//             if (!avatar) {
//                 console.error("Avatar not loaded yet!");
//                 return;
//             }

//             const loader = new THREE.GLTFLoader();
//             loader.load(outfitUrl, function (gltf) {
//                 let outfit = gltf.scene;
//                 outfit.name = "outfit";
//                 outfit.scale.set(1, 1, 1);
//                 outfit.position.set(0, 0, 0);

//                 if (currentOutfit) {
//                     avatar.remove(currentOutfit);
//                 }

//                 currentOutfit = outfit;
//                 avatar.add(outfit);
//             }, undefined, function (error) {
//                 console.error("Error loading outfit:", error);
//             });
//         }

//         function moveAvatar(direction) {
//             if (!avatar) return;

//             let step = 0.1; // Movement speed

//             switch (direction) {
//                 case "left":
//                     if (avatar.position.x > -2) avatar.position.x -= step;
//                     break;
//                 case "right":
//                     if (avatar.position.x < 2) avatar.position.x += step;
//                     break;
//                 case "back":
//                     if (avatar.position.z < 2) avatar.position.z += step;
//                     break;
//             }
//         }

//         // Keyboard Controls
//         document.addEventListener("keydown", function (event) {
//             switch (event.key) {
//                 case "ArrowLeft":
//                     moveAvatar("left");
//                     break;
//                 case "ArrowRight":
//                     moveAvatar("right");
//                     break;
//                 case "ArroDown":
//                     moveAvatar("back");
//                     break;
//             }
//         });

//         function animate() {
//             requestAnimationFrame(animate);
//             controls.update();
//             renderer.render(scene, camera);
//         }

//         let clothes = {
//             hat: null,
//             shirt: null,
//             pants: null,
//             shoes: null,
//         };
        
//         function loadClothing(item, url) {
//             const loader = new THREE.OBJLoader();
        
//             loader.load(
//                 url,
//                 (obj) => {
//                     // Remove previous clothing of the same type
//                     if (clothes[item]) {
//                         avatar.remove(clothes[item]);
//                     }
        
//                     // Scale and position the clothing properly
//                     obj.scale.set(1, 1, 1);
//                     switch (item) {
//                         case "hat":
//                             obj.position.set(0, 0, 0); // Adjust for head
//                             break;
//                         case "shirt":
//                             obj.position.set(0, 0, 0); // Adjust for torso
//                             break;
//                         case "pants":
//                             obj.position.set(0, 0, 0); // Adjust for legs
//                             break;
//                         case "shoes":
//                             obj.position.set(0, 0, 0); // Adjust for feet
//                             break;
//                     }
        
//                     // Add clothing to avatar and store reference
//                     avatar.add(obj);
//                     clothes[item] = obj;
//                 },
//                 undefined,
//                 (error) => {
//                     console.error(`Error loading ${item} model:`, error);
//                 }
//             );
//         }
        
//         function switchHat(hatUrl) {
//             loadClothing("hat", hatUrl);
//         }
        
//         function switchShirt(shirtUrl) {
//             loadClothing("shirt", shirtUrl);
//         }
        
//         function switchPants(pantsUrl) {
//             loadClothing("pants", pantsUrl);
//         }
        
//         function switchShoes(shoesUrl) {
//             loadClothing("shoes", shoesUrl);
//         }
        
//         function loadAvatarWithTexture(url, textureUrl) {
//             const loader = new THREE.GLTFLoader();
//             const textureLoader = new THREE.TextureLoader();
        
//             loader.load(
//                 url,
//                 function (gltf) {
//                     if (avatar) scene.remove(avatar);
        
//                     avatar = gltf.scene;
        
//                     // Load the texture
//                     const texture = textureLoader.load(textureUrl);
        
//                     // Traverse the avatar's meshes and apply the texture
//                     avatar.traverse((child) => {
//                         if (child.isMesh) {
//                             child.material.map = texture; // Apply the texture
//                             child.material.needsUpdate = true; // Update the material
//                         }
//                     });
        
//                     avatar.scale.set(1, 1, 1);
//                     avatar.position.set(0, -1, 0);
        
//                     scene.add(avatar);
//                 },
//                 undefined,
//                 function (error) {
//                     console.error("Error loading avatar:", error);
//                 }
//             );
//         }
        

//         init();

// -------------------------------------------------------------------x--------------------------------------------------------------------


// let scene, camera, renderer, avatar, controls, currentOutfit;
// function init() {
//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.set(0, 1, 3);

//     renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById('avatar-container').appendChild(renderer.domElement);

//     controls = new THREE.OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;

//     const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
//     scene.add(light);

//     // Load Avatar
//     loadAvatar('https://raw.githubusercontent.com/jainrahul0807/virtual_fashion_website/main/static/model/avatar.glb');

//     // Buttons for switching clothes
//     document.getElementById("hat-button").addEventListener("click", () => {
//         loadClothingWithTextures("hat", {
//             objUrl: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/clothes/hat01.obj",
//             textures: {
//                 diffuse: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/hat01/Patrol_Cap.png",
//                 normal: "/https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/hat01/Patrol_Cap_NRM.png",
//                 specular: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/hat01/Patrol_Cap_SPEC.png",
//             }
//         });
//     });

//     document.getElementById("shirt-button").addEventListener("click", () => {
//         loadClothingWithTextures("shirt", {
//             objUrl: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/clothes/shirt02.obj",
//             textures: {
//                 diffuse: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/shirt02/Knitted_Sweater_01.png",
//                 normal: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/shirt02/Knitted_Sweater_01_NRM.png",
//                 specular: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/shirt02/Knitted_Sweater_01_SPEC.png",
//             }
//         });
//     });

//     document.getElementById("pants-button").addEventListener("click", () => {
//         loadClothingWithTextures("pants", {
//             objUrl: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/clothes/pants01.obj",
//             textures: {
//                 diffuse: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/pants01/M_Trousers_01.png",
//                 normal: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/pants01/M_Trousers_01_NRM.png",
//                 specular: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/pants01/M_Trousers_01_SPEC.png",
//             }
//         });
//     });

//     document.getElementById("shoes-button").addEventListener("click", () => {
//         loadClothingWithTextures("shoes", {
//             objUrl: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/clothes/shoes01.obj",
//             textures: {
//                 diffuse: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/shoes01/riding_boots.png",
//                 normal: "https://raw.githubusercontent.com/jainrahul0807/virtual_fashion/main/shoes01/riding_boots_norm.png",
//                 // specular: "/path/to/Shoes_Specular.png",
//             }
//         });
//     });

//     animate();
// }
// function loadAvatar(url) {
//     const loader = new THREE.GLTFLoader();
//     loader.load(url, function (gltf) {
//         if (avatar) scene.remove(avatar);
//         avatar = gltf.scene;

//         avatar.scale.set(0.15, 0.15, 0.15);
//         avatar.traverse((child) => {
//             if (child.isMesh) {
//                 child.material = new THREE.MeshStandardMaterial({
//                     color: 0xffdbac,
//                 });
//             }
//         });
//         avatar.position.set(0, -1, 0);

//         scene.add(avatar);
//     }, undefined, function (error) {
//         console.error('Error loading avatar:', error);
//     });
// }
// // Generic function to load clothing with textures
// function loadClothingWithTextures(item, config) {
//     const { objUrl, textures } = config;

//     if (!avatar) {
//         console.error("Avatar not loaded yet!");
//         return;
//     }

//     const loader = new THREE.OBJLoader();
//     const textureLoader = new THREE.TextureLoader();

//     loader.load(
//         objUrl,
//         (obj) => {
//             // Remove previous clothing of the same type
//             if (clothes[item]) {
//                 avatar.remove(clothes[item]);
//             }

//             // Load textures
//             const diffuseTexture = textureLoader.load(textures.diffuse);
//             const normalTexture = textureLoader.load(textures.normal);
//             const specularTexture = textureLoader.load(textures.specular);

//             // Apply textures to the material
//             const material = new THREE.MeshStandardMaterial({
//                 map: diffuseTexture, // Diffuse map
//                 normalMap: normalTexture, // Normal map
//                 metalnessMap: specularTexture, // Specular map
//                 roughness: 0.5, // Adjust roughness as needed
//             });

//             obj.traverse((child) => {
//                 if (child.isMesh) {
//                     child.material = material;
//                 }
//             });

//             // Adjust position based on clothing type
//             obj.scale.set(1, 1, 1);
//             switch (item) {
//                 case "hat":
//                     obj.position.set(0, 0, 0); // Adjust for head
//                     break;
//                 case "shirt":
//                     obj.position.set(0, 0, 0); // Adjust for torso
//                     break;
//                 case "pants":
//                     obj.position.set(0, 0, 0); // Adjust for legs
//                     break;
//                 case "shoes":
//                     obj.position.set(0, 0, 0); // Adjust for feet
//                     break;
//             }

//             // Add clothing to avatar and store reference
//             avatar.add(obj);
//             clothes[item] = obj;
//         },
//         undefined,
//         (error) => {
//             console.error(`Error loading ${item} model:`, error);
//         }
//     );
// }
// function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
// }
// let clothes = {
//     hat: null,
//     shirt: null,
//     pants: null,
//     shoes: null,
// };
// init();

// -------------------------------------------------------------------x--------------------------------------------------------------------

// let scene, camera, renderer, avatar, controls;
// let clothes = {}; // Store currently worn clothes
// let clothingLibrary = {}; // Store loaded clothing data

// function init() {
//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.set(0, 1, 3);

//     renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById('avatar-container').appendChild(renderer.domElement);

//     controls = new THREE.OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;

//     const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
//     scene.add(light);

//     // Load Avatar
//     loadAvatar('https://raw.githubusercontent.com/jainrahul0807/virtual_fashion_website/main/static/model/avatar.glb');

//     // Load clothing library JSON
//     loadClothingLibrary('https://raw.githubusercontent.com/jainrahul0807/virtual_fashion_website/main/data/cloth.json'
// );

//     animate();
// }

// // Load Clothing Library JSON
// function loadClothingLibrary(url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             clothingLibrary = data.clothingLibrary;
//             createClothingButtons();
//         })
//         .catch(error => console.error("Error loading clothing library:", error));
// }

// // Create Clothing Buttons Dynamically
// function createClothingButtons() {
//     const controlsDiv = document.getElementById("controls");
//     for (const category in clothingLibrary) {
//         clothingLibrary[category].forEach(clothing => {
//             const button = document.createElement("button");
//             button.textContent = clothing.name;
//             button.onclick = () => switchClothingByToken(clothing.token);
//             controlsDiv.appendChild(button);
//         });
//     }
// }

// // Load Avatar Model
// function loadAvatar(url) {
//     const loader = new THREE.GLTFLoader();
//     loader.load(url, function (gltf) {
//         if (avatar) scene.remove(avatar);
//         avatar = gltf.scene;

//         avatar.scale.set(0.15, 0.15, 0.15);
//         avatar.traverse((child) => {
//             if (child.isMesh) {
//                 child.material = new THREE.MeshStandardMaterial({ color: 0xffdbac });
//             }
//         });
//         avatar.position.set(0, -1, 0);

//         scene.add(avatar);
//     }, undefined, function (error) {
//         console.error('Error loading avatar:', error);
//     });
// }

// // Get Clothing Item by Token
// function getClothingByToken(token) {
//     for (const category in clothingLibrary) {
//         const items = clothingLibrary[category];
//         const item = items.find(clothing => clothing.token === token);
//         if (item) return item;
//     }
//     console.warn(`No clothing found for token: ${token}`);
//     return null;
// }

// // Load Clothing with Textures
// function loadClothingWithTextures(clothing) {
//     if (!avatar) {
//         console.error("Avatar not loaded yet!");
//         return;
//     }
    
//     const loader = new THREE.OBJLoader();
//     const textureLoader = new THREE.TextureLoader();

//     loader.load(clothing.objUrl, function (obj) {
//         // Remove previous clothing of the same type
//         let category = getClothingCategory(clothing.token);
//         if (clothes[category]) {
//             avatar.remove(clothes[category]);
//         }

//         // Apply textures
//         obj.traverse((child) => {
//             if (child.isMesh) {
//                 let material = new THREE.MeshStandardMaterial({
//                     map: clothing.textures.diffuse ? textureLoader.load(clothing.textures.diffuse) : null,
//                     normalMap: clothing.textures.normal ? textureLoader.load(clothing.textures.normal) : null,
//                     specularMap: clothing.textures.specular ? textureLoader.load(clothing.textures.specular) : null
//                 });
//                 child.material = material;
//             }
//         });

//         // Position adjustments
//         obj.scale.set(1, 1, 1);
//         obj.position.set(0, 0, 0);

//         // Add clothing to avatar
//         avatar.add(obj);
//         clothes[category] = obj;

//     }, undefined, function (error) {
//         console.error(`Error loading clothing:`, error);
//     });
// }

// // Switch Clothing using Token
// function switchClothingByToken(token) {
//     const clothing = getClothingByToken(token);
//     if (clothing) {
//         loadClothingWithTextures(clothing);
//     }
// }

// // Get Clothing Category from Token
// function getClothingCategory(token) {
//     for (const category in clothingLibrary) {
//         if (clothingLibrary[category].some(item => item.token === token)) {
//             return category;
//         }
//     }
//     return null;
// }

// function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
// }

// init();

// -------------------------------------------------------------------x--------------------------------------------------------------------

let scene, camera, renderer, avatar, controls;
let clothes = {}; // Store currently worn clothes
let clothingLibrary = {}; // Store loaded clothing data

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 3);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('avatar-container').appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    scene.add(light);

    // Load Avatar
    loadAvatar('https://raw.githubusercontent.com/jainrahul0807/virtual_fashion_website/main/static/model/avatar.glb');

    // Load clothing library JSON
    loadClothingLibrary('https://raw.githubusercontent.com/jainrahul0807/virtual_fashion_website/main/data/cloth.json');

    animate();
}

// Load Clothing Library JSON
function loadClothingLibrary(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            clothingLibrary = data.clothingLibrary;
            createClothingButtons();
        })
        .catch(error => console.error("Error loading clothing library:", error));
}

// Create Clothing Buttons Dynamically
function createClothingButtons() {
    const controlsDiv = document.getElementById("controls");
    for (const category in clothingLibrary) {
        clothingLibrary[category].forEach(clothing => {
            const button = document.createElement("button");
            button.textContent = clothing.name;
            button.onclick = () => switchClothingByToken(clothing.token);
            controlsDiv.appendChild(button);
        });
    }
}

// Load Avatar Model
function loadAvatar(url) {
    const loader = new THREE.GLTFLoader();
    loader.load(url, function (gltf) {
        if (avatar) scene.remove(avatar);
        avatar = gltf.scene;

        avatar.scale.set(0.15, 0.15, 0.15);
        avatar.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({ color: 0xffdbac });
            }
        });
        avatar.position.set(0, -1, 0);

        scene.add(avatar);
    }, undefined, function (error) {
        console.error('Error loading avatar:', error);
    });
}

// Get Clothing Item by Token
function getClothingByToken(token) {
    for (const category in clothingLibrary) {
        const items = clothingLibrary[category];
        const item = items.find(clothing => clothing.token === token);
        if (item) return item;
    }
    console.warn(`No clothing found for token: ${token}`);
    return null;
}

// Load Clothing with OBJ & MTL
function loadClothingWithMaterials(clothing) {
    if (!avatar) {
        console.error("Avatar not loaded yet!");
        return;
    }

    const mtlLoader = new THREE.MTLLoader();
    const loader = new THREE.OBJLoader();

    mtlLoader.load(clothing.mtlUrl, (materials) => {
        materials.preload();
        loader.setMaterials(materials);
        
        loader.load(clothing.objUrl, function (obj) {
            // Remove previous clothing of the same type
            let category = getClothingCategory(clothing.token);
            if (clothes[category]) {
                avatar.remove(clothes[category]);
            }

            // Adjust position
            obj.scale.set(1, 1, 1);
            obj.position.set(0, 0, 0);

            // Add clothing to avatar
            avatar.add(obj);
            clothes[category] = obj;
        }, undefined, function (error) {
            console.error(`Error loading clothing:`, error);
        });

    }, undefined, function (error) {
        console.error(`Error loading MTL file:`, error);
    });
}

// Switch Clothing using Token
function switchClothingByToken(token) {
    const clothing = getClothingByToken(token);
    if (clothing) {
        loadClothingWithMaterials(clothing);
    }
}

// Get Clothing Category from Token
function getClothingCategory(token) {
    for (const category in clothingLibrary) {
        if (clothingLibrary[category].some(item => item.token === token)) {
            return category;
        }
    }
    return null;
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

init();
