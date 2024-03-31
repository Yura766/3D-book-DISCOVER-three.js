import { BoxGeometry,MeshBasicMaterial,Mesh } from '../../node_modules/three/build/three.module.js';

function createCube() {
        // create a geometry
        const geometry = new BoxGeometry(2, 2, 2);

        // create a default (white) Basic material
        const material = new MeshBasicMaterial();

        // create a Mesh containing the geometry and material
        const cube = new Mesh(geometry, material);

        // add the mesh to the scene
        return cube
}

export { createCube };
