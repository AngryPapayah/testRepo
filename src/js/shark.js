import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Shark extends Actor {
    onInitialize() {
        this.sharkToRandomPosition();
        this.graphics.use(Resources.Shark.toSprite());

        this.events.on("exitviewport", (e) => this.fishToRandomPosition(e));
    }

    sharkToRandomPosition() {
        this.pos = new Vector(-100, Math.random() * 720);
        this.vel = new Vector(150, 0);
        this.scale = new Vector(0.2, 0.2);
        
    }
}