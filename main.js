import { World } from './world/World.js'



function main() {
    // Get a reference to the container element that will hold our scene
    const container = document.querySelector('#scene-container');
    const containerSecond = document.querySelector('#scene-container-second');

    const myWorld = new World(container)
    const myWorld2 = new World(containerSecond)

    myWorld.render();
    myWorld2.render();

}

main()