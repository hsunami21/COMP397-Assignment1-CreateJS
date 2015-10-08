var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    var BB = (function (_super) {
        __extends(BB, _super);
        // CONSTRUCTOR
        function BB() {
            _super.call(this);
        }
        // PUBLIC METHODS
        BB.prototype.start = function () {
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
        };
        BB.prototype.update = function () {
        };
        // PRIVATE METHODS
        // EVENT HANDLERS
        BB.prototype._clickRedButton = function (event) {
            changeState(config.DEATH3_STATE);
        };
        BB.prototype._clickGreenButton = function (event) {
            changeState(config.DEATH1_STATE);
        };
        BB.prototype._clickBlueButton = function (event) {
            changeState(config.DEATH3_STATE);
        };
        return BB;
    })(objects.Scene);
    states.BB = BB;
})(states || (states = {}));
