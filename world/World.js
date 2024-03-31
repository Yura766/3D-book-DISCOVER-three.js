import { createScene } from "./components/scene.js";
import { createCamera } from "./components/camera.js"
import { createCube } from "./components/cube.js";

import {createRenderer} from "./systems/renderer.js";
import { Resizer } from './systems/Resizer.js';

let scene
let camera
let renderer

class World {

    constructor(container) {
        this.container = container;
        scene = createScene();
        camera = createCamera();
        renderer = createRenderer();

        container.append(renderer.domElement);

        const cube = createCube();
        scene.add(cube);

        const resizer = new Resizer(container, camera, renderer);
    }

    render() {
        console.log(this.container);
        // // render, or 'create a still image', of the scene
        renderer.render(scene, camera);
    }


}


export { World };