module states {

    export class Death5 extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _textLabel: objects.Label;
        _startOverButton: objects.Button;
    

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            // hello label
            this._textLabel = new objects.Label("You step through the portal and find yourself strapped into \
\n\n\na chair. You hear voices whispering all around you. Then a \
\n\n\nman walks up to you and says, \"Mr.White... You have chosen \
\n\n\nthe wrong portal. Who in their right mind would go for the \
\n\n\nbrown? It's too bad... You were so close.\" Everything goes \
\n\n\nblack and you hear him laughing. The laughing grows fainter \
\n\n\nand fainter until... Nothing.", "18px Consolas", "#000000", 320, 190);
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