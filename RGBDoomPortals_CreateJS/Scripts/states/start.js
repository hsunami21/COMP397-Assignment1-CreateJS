var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // START CLASS
    var Start = (function (_super) {
        __extends(Start, _super);
        // CONSTRUCTOR
        function Start() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Start.prototype.start = function () {
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
        };
        Start.prototype.update = function () {
        };
        // PRIVATE METHODS
        // EVENT HANDLERS
        Start.prototype._clickRedButton = function (event) {
            changeState(config.P1_STATE);
        };
        Start.prototype._clickGreenButton = function (event) {
            changeState(config.P1_STATE);
        };
        Start.prototype._clickBlueButton = function (event) {
            changeState(config.P1_STATE);
        };
        return Start;
    })(objects.Scene);
    states.Start = Start;
})(states || (states = {}));
