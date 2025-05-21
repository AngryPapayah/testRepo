import { Resources } from "./resources.js";
import { Actor, Vector } from "excalibur";

export class Background extends Actor {
    onInitialize() {
        this.graphics.use(Resources.Background.toSprite());
        background.graphics.use(Resources.Background.toSprite());
        background.scale = new Vector(4, 4)
    }
}