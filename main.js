import { World } from './world/World.js'



function main() {
    // Get a reference to the container element that will hold our scene
    const container = document.querySelector('#scene-container');

    const myWorld = new World(container)

    myWorld.render();

}

main()