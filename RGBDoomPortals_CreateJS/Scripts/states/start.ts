module states {

    export class Start extends objects.Scene {
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
            this._textLabel = new objects.Label("You wake up in a dimly lit room. There are three portals – a \
\n\n\nred one on the left wall, a green one on the middle wall, \
\n\n\nand a blue one on the right wall. You see a table with a \
\n\n\nnote on it. On it is a message: \"Welcome, Mr.White, to your \
\n\n\nworst nightmare! Before you are three portals, each of \
\n\n\nwhich will take you somewhere different. But beware, there \
\n\n\nis only one portal that will lead you to safety! Now, which \
\n\n\ncolour is your favourite?\" \
\n\n\n\nWhich portal do you go through?", "18px Consolas", "#000000", 320, 190);
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
            changeState(config.R_STATE);
        }

        private _clickGreenButton(event: createjs.MouseEvent): void {
            changeState(config.WIN_STATE);
        }

        private _clickBlueButton(event: createjs.MouseEvent): void {
            changeState(config.DEATH5_STATE);
        }
    }

}