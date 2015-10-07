module states {

    export class Death2 extends objects.Scene {
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
            this._textLabel = new objects.Label("You step through the portal and find yourself teleported \
\n\n\nonto the surface of Mars. A voice speaks out and says, \
\n\n\n\"Maybe next time you should take a deep breath before \
\n\n\nentering a portal!\" As you gasp for air, you realize that \
\n\n\nthis is the end.", "18px Consolas", "#000000", 320, 190);
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