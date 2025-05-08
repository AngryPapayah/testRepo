import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Mofusand extends Actor {
    onInitialize() {
        this.mofusandToRandomPosition();
        this.graphics.use(Resources.Mofusand.toSprite());

        this.events.on("exitviewport", (e) => this.mofusandToRandomPosition(e));
    }

    mofusandToRandomPosition() {
        this.pos = new Vector(Math.random() * 1280, Math.random() * 720);
        this.vel = new Vector(Math.random() * 100 - 50, Math.random() * 100 - 50);
        this.scale = new Vector(-0.07, 0.07);
    }
}