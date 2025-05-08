import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Fish extends Actor {
    onInitialize() {
        this.fishToRandomPosition();
        this.graphics.use(Resources.Fish.toSprite());

        this.events.on("exitviewport", (e) => this.fishToRandomPosition(e));
    }

    fishToRandomPosition() {
        this.pos = new Vector(Math.random() * 1280, Math.random() * 720);
        this.vel = new Vector(Math.random() * 100 - 50, Math.random() * 100 - 50);
        this.scale = new Vector(1, 1);

    }
}