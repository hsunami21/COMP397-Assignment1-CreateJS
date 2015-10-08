module states {

    export class Win extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _textLabel: objects.Label;
        _startOverButton: objects.Button;
   

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            // yay
            createjs.Sound.play("Yay"); // activate static class play 

            // hello label
            this._textLabel = new objects.Label("You step through the portal and find yourself looking into \
\n\n\nthe eyes of a beautiful woman. She asks, \"Stephen, are \
\n\n\nyou okay?!\" You nod your head. She then gives you a hug \
\n\n\nand says, \"Let's go home, baby. I've got a surprise for \
\n\n\nyou.\" You notice a table with a note on it. You go to it \
\n\n\nand read it: \"Congratulations, Mr.White. You chose the \
\n\n\nright path.\" You don't recall anything that happened, \
\n\n\nbut you know that you were lucky.", "18px Consolas", "#000000", 320, 190);
            this.addChild(this._textLabel); // add label to the stage


            // start over button
            this._startOverButton = new objects.Button("StartOverButton", 290, 415);
            this._startOverButton.on("click", this._clickStartOverButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._startOverButton);

            stage.addChild(this);

        }

        public update(): void {

        }

        // PRIVATE METHODS
        // EVENT HANDLERS
        private _clickStartOverButton(event: createjs.MouseEvent): void {
            changeState(config.START_STATE);
        }
    }

}