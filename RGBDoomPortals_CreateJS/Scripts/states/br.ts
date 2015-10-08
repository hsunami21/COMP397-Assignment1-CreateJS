module states {

    export class BR extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _textLabel: objects.Label;
        _redButton: objects.Button;
        _greenButton: objects.Button;
        _blueButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            // hello label
            this._textLabel = new objects.Label("You step through the portal and end up in another room. This \
\n\n\nroom also has red, green, and blue portals. You see another \
\n\n\nnote on a table and it reads: \"Hmmm... you were lucky that \
\n\n\ntime... Well, pick again.\" \
\n\n\n\n\nWhich portal do you go through?", "18px Consolas", "#000000", 320, 190);
            this.addChild(this._textLabel); // add label to the stage

            // red portal button
            this._redButton = new objects.Button("RedButton", 135, 415);
            this._redButton.on("click", this._clickRedButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._redButton);

            stage.addChild(this);

            // green portal button
            this._greenButton = new objects.Button("GreenButton", 335, 415);
            this._greenButton.on("click", this._clickGreenButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._greenButton);

            stage.addChild(this);

            // blue portal button
            this._blueButton = new objects.Button("BlueButton", 535, 415);
            this._blueButton.on("click", this._clickBlueButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._blueButton);

            stage.addChild(this);
        }

        public update(): void {

        }

        // PRIVATE METHODS
        // EVENT HANDLERS
        private _clickRedButton(event: createjs.MouseEvent): void {
            changeState(config.DEATH2_STATE);
        }

        private _clickGreenButton(event: createjs.MouseEvent): void {
            changeState(config.DEATH1_STATE);
        }

        private _clickBlueButton(event: createjs.MouseEvent): void {
            changeState(config.DEATH2_STATE);
        }
    }

}