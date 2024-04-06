import { WebGLRenderer } from '../../node_modules/three/build/three.module.js';

function createRenderer() {
    // create the renderer
    const renderer = new WebGLRenderer({ antialias: true });
    // turn on the physically correct lighting model
    renderer.physicallyCorrectLights = true;
    return renderer;
}

export { createRenderer };
