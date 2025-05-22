import { Actor, Color, Font, Label, Vector } from "excalibur";

export class UI extends Actor {
    label;
    
    
    onInitialize(engine) {
        this.label = new Label({
            text: 'Score: 0',
            pos: new Vector(100, 50),
            font: new Font({
                family: 'Arial',
                size: 20,
                color: Color.Red,

            })
        });

        this.addChild(this.label);
        
    }

    updateScore(score) {
        this.label.text = 'Score ${score} ';
    }
}