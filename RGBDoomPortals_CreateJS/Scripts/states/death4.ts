module states {

    export class Death4 extends objects.Scene {
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
            this._textLabel = new objects.Label("You step through the portal and find yourself staring into \
\n\n\na mirror. A voice speaks out and says, \"It seems you don't \
\n\n\nwant to get out alive. Oh well...\" You see yourself grip your \
\n\n\nchest and the next thing you know, your chest is in immense \
\n\n\npain. You realize that you’re having a heart attack and at \
\n\n\nthat moment, you know that this is the end.", "18px Consolas", "#000000", 320, 190);
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