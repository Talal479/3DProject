// Define an interface for the 3D model properties
interface Model {
    vertices: Float32Array;
    splats: Float32Array;
    texture: WebGLTexture | null;
}

// Initialize an instance of the Model interface
const model: Model = {
    vertices: new Float32Array(),
    splats: new Float32Array(),
    texture: null
};

// Function to load model data
function loadModelData(data: any): Model {
    return {
        vertices: new Float32Array(data.vertices),
        splats: new Float32Array(data.splats),
        texture: data.texture
    };
}

// Example usage
const exampleData = {
    vertices: [0, 1, 2],
    splats: [0.1, 0.2, 0.3],
    texture: null // This would be a WebGLTexture object in a real scenario
};

const loadedModel = loadModelData(exampleData);
console.log(loadedModel);
