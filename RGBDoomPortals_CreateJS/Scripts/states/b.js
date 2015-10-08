var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    var B = (function (_super) {
        __extends(B, _super);
        // CONSTRUCTOR
        function B() {
            _super.call(this);
        }
        // PUBLIC METHODS
        B.prototype.start = function () {
            // hello label
            this._textLabel = new objects.Label("You step through the portal and end up in another room. The \
\n\n\nportal you entered closes behind you. This room also has \
\n\n\nred, green, and blue portals. You see another note on a \
\n\n\ntable and it reads: \"Are you sure this is your favourite \
\n\n\ncolour? Maybe you should try again...\" \
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
        B.prototype.update = function () {
        };
        // PRIVATE METHODS
        // EVENT HANDLERS
        B.prototype._clickRedButton = function (event) {
            changeState(config.BR_STATE);
        };
        B.prototype._clickGreenButton = function (event) {
            changeState(config.BG_STATE);
        };
        B.prototype._clickBlueButton = function (event) {
            changeState(config.BB_STATE);
        };
        return B;
    })(objects.Scene);
    states.B = B;
})(states || (states = {}));
