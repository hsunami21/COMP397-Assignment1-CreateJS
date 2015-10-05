var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // DEATH 1 CLASS
    var Death1 = (function (_super) {
        __extends(Death1, _super);
        // CONSTRUCTOR
        function Death1() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Death1.prototype.start = function () {
            // hello label
            this._textLabel = new objects.Label("You step through the portal and find yourself in the \
\n\n\nmiddle of a horde of zombies. A voice speaks out and says, \
\n\n\n\"Unfortunate... Very unfortunate...\" As the zombies swarm \
\n\n\nat you, you realize that this is the end.", "18px Consolas", "#000000", 320, 190);
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
        Death1.prototype.update = function () {
        };
        // PRIVATE METHODS
        // EVENT HANDLERS
        Death1.prototype._clickRedButton = function (event) {
            changeState(config.START_STATE);
        };
        Death1.prototype._clickGreenButton = function (event) {
            changeState(config.START_STATE);
        };
        Death1.prototype._clickBlueButton = function (event) {
            changeState(config.START_STATE);
        };
        return Death1;
    })(objects.Scene);
    states.Death1 = Death1;
})(states || (states = {}));
