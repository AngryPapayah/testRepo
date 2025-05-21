import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Shark extends Actor {

    speed = 300;

    onInitialize() {
        this.sharkToRandomPosition();
        this.graphics.use(Resources.Shark.toSprite());
        this.events.on("exitviewport", (e) => this.sharkToRandomPosition(e));
    }

    onPreUpdate(engine) {
       let xspeed = 0;
       let yspeed = 0;
       
        if (engine.input.keyboard.isHeld("ArrowUp")) {
            yspeed = -this.speed;
        }
        if (engine.input.keyboard.isHeld("ArrowDown")) {
            yspeed = this.speed;
        }
        if (engine.input.keyboard.isHeld("ArrowLeft")) {
            xspeed = -this.speed;
        }
        if (engine.input.keyboard.isHeld("ArrowRight")) {
            xspeed = this.speed;
        }

        this.vel = new Vector(xspeed * 200, yspeed * 200);
    }

    sharkToRandomPosition() {
        this.pos = new Vector(-100, Math.random() * 720);
        this.vel = new Vector(150, 0);
        this.scale = new Vector(0.2, 0.2);

        if (this.vel.x > 0) {
            this.graphics.flipHorizontal = true
         
        }
        
        // handleCollision(event){
        //     if (event.other instanceof Fish) {
        //         event.other.owner.hit();
        //         // game.ui.updateScore(1);
        //     }
        // }
    }

   


}