import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class ScaredFish extends Actor {
            scaredFish.graphics.use(Resources.ScaredFish.toSprite())
scaredFish.scale = new Vector(5, 5)
scaredFish.pos = new Vector(Math.random() * 1280, Math.random() * 720)
scaredFish.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100)
scaredFish.events.on("exitviewport", (e) => this.fishLeft(e))
}