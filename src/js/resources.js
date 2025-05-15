import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Mofusand: new ImageSource('images/mofusand.webp'),
    Background: new ImageSource('images/backgroundSea.jpg'),
    Shark: new ImageSource('images/shark.webp'),
    Bubbles: new ImageSource('images/bubbles.png'),
    ScaredFish: new ImageSource('images/scaredFish.png'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }