import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Bubbles extends Actor {
    onInitialize() {
        this.bubblesToRandomPosition();
        this.graphics.use(Resources.Bubbles.toSprite());

        this.events.on("exitviewport", (e) => this.bubblesToRandomPosition(e));
    }

    bubblesToRandomPosition() {
        this.pos = new Vector(Math.random() * 1280, 720); // onderaan het scherm
        this.vel = new Vector(Math.random() * 100 - 50, -Math.random() * 50 - 10);
        this.scale = new Vector(0.1,0.1);
        
    }
}