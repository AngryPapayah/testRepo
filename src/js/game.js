import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Mofusand } from './mofusand.js'
import { Shark } from './shark.js'
import { Bubbles } from './bubbles.js'
import { UI } from './ui.js'
import { Background } from './background.js'




export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        // Achtergrond toevoegen
        const background = new Actor();
        background.graphics.use(Resources.Background.toSprite());
        background.scale = new Vector(4, 4)
        this.add(background);

        for (let i = 0; i < 10; i++) {

            const fish = new Fish()
            // fish.graphics.use(Resources.Fish.toSprite())
            // fish.pos = new Vector(Math.random() * 1280, Math.random() * 720)
            // fish.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100)
            // fish.scale = new Vector(1, 1)
            // fish.events.on("exitviewport", (e) => this.fishLeft(e))
            this.add(fish)

        }

        // Mofusand toevoegen
        for (let i = 0; i < 10; i++) {

            const mofusand = new Mofusand()
            // mofusand.graphics.use(Resources.Mofusand.toSprite())
            // mofusand.scale = new Vector(-0.07, 0.07)
            // mofusand.pos = new Vector(Math.random() * 1280, Math.random() * 720)
            // mofusand.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100)
            // mofusand.events.on("exitviewport", (e) => this.fishLeft(e))
            this.add(mofusand)

        }

        // Shark toevoegen
        const shark = new Shark()

        // shark.graphics.use(Resources.Shark.toSprite());
        // shark.scale = new Vector(0.25, 0.25)
        // shark.pos =  new Vector(Math.random() * 1280, Math.random() * 720)
        // shark.vel = new Vector(Math.random() * 100 - 50, Math.random() * 100 - 50);
        this.add(shark);

        // Bubbles toevoegen
        for (let i = 0; i < 20; i++) {
            const bubbles = new Bubbles()
            this.add(bubbles)

        }

        const ui = new UI();
        this.add(ui);

        ui.updateScore(200);

    }

}

new Game()
