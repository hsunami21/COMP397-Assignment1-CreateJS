module states {

    export class GGO extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _textLabel: objects.Label;
        _pinkButton: objects.Button;
        _brownButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            // hello label
            this._textLabel = new objects.Label("You step through the portal and end up in another room. You \
\n\n\nnotice that there are only two portals in this room - a pink \
\n\n\none and a brown one. This time, there is no table or note. \
\n\n\nYou think to yourself, \"I must be getting close!\" \
\n\n\n\n\nDo you go for the pink? Or do you go for the brown?", "18px Consolas", "#000000", 320, 190);
            this.addChild(this._textLabel); // add label to the stage

            // pink portal button
            this._pinkButton = new objects.Button("PinkButton", 235, 415);
            this._pinkButton.on("click", this._clickPinkButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._pinkButton);

            stage.addChild(this);

            // brown portal button
            this._brownButton = new objects.Button("BrownButton", 435, 415);
            this._brownButton.on("click", this._clickBrownButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._brownButton);

            stage.addChild(this);

        }

        public update(): void {

        }

        // PRIVATE METHODS
        // EVENT HANDLERS
        private _clickPinkButton(event: createjs.MouseEvent): void {
            changeState(config.WIN_STATE);
        }

        private _clickBrownButton(event: createjs.MouseEvent): void {
            changeState(config.DEATH5_STATE);
        }

    }

}