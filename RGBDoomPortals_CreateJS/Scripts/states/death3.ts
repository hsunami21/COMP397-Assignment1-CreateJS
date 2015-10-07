module states {

    export class Death3 extends objects.Scene {
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
            this._textLabel = new objects.Label("You step through the portal and find yourself locked into \
\n\n\na guillotine. A voice speaks out and says, \"You should \
\n\n\nhave thought that one through...\" You hear the guillotine \
\n\n\nblade falling and realize that this is the end.", "18px Consolas", "#000000", 320, 190);
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