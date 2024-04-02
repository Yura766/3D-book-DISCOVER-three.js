import { BoxGeometry,MeshBasicMaterial,Mesh,MeshStandardMaterial } from '../../node_modules/three/build/three.module.js';

function createCube() {
        // create a geometry
        const geometry = new BoxGeometry(2, 2, 2);

        // create a default (white) Basic material
        const material = new MeshStandardMaterial({ color: 'purple' });

        // create a Mesh containing the geometry and material
        const cube = new Mesh(geometry, material);
        cube.rotation.set(-0.5, -0.1, 0.8);

        // add the mesh to the scene
        return cube
}

export { createCube };
