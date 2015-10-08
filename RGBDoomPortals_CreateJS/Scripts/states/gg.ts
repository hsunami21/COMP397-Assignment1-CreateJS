module states {

    export class GG extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _textLabel: objects.Label;
        _purpleButton: objects.Button;
        _orangeButton: objects.Button;
        _cyanButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            // hello label
            this._textLabel = new objects.Label("You step through the portal and end up in another room. \
\n\n\nCompared to the other rooms, the colours of the portals are \
\n\n\npurple, cyan, and orange. You see another note on a table and \
\n\n\non it reads: \"Green is indeed one of your favourite colours, \
\n\n\nMr.White. Now you must choose another one of your favourite \
\n\n\ncolours. Which one do you think it is?\" \
\n\n\n\n\nWhich portal do you go through?", "18px Consolas", "#000000", 320, 190);
            this.addChild(this._textLabel); // add label to the stage

            // purple portal button
            this._purpleButton = new objects.Button("PurpleButton", 135, 415);
            this._purpleButton.on("click", this._clickPurpleButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._purpleButton);

            stage.addChild(this);

            // orange portal button
            this._orangeButton = new objects.Button("OrangeButton", 335, 415);
            this._orangeButton.on("click", this._clickOrangeButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._orangeButton);

            stage.addChild(this);

            // cyan portal button
            this._cyanButton = new objects.Button("CyanButton", 535, 415);
            this._cyanButton.on("click", this._clickCyanButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._cyanButton);

            stage.addChild(this);
        }

        public update(): void {

        }

        // PRIVATE METHODS
        // EVENT HANDLERS
        private _clickPurpleButton(event: createjs.MouseEvent): void {
            changeState(config.DEATH4_STATE);
        }

        private _clickOrangeButton(event: createjs.MouseEvent): void {
            changeState(config.GGO_STATE);
        }

        private _clickCyanButton(event: createjs.MouseEvent): void {
            changeState(config.DEATH4_STATE);
        }
        
    }

}