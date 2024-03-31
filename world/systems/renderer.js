import { WebGLRenderer } from '../../node_modules/three/build/three.module.js';

function createRenderer() {
    // create the renderer
    const renderer = new WebGLRenderer();

    return renderer;
}

export { createRenderer };
