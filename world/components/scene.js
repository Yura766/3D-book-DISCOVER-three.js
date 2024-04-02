import { Color, Scene } from '../../node_modules/three/build/three.module.js';

function createScene() {
    // create a Scene
    const scene = new Scene();

    // Set the background color
    scene.background = new Color('blue');

    
    return scene;
}

export { createScene };
