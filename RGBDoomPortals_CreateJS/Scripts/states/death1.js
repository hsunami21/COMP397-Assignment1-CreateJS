var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
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
            // start over button
            this._startOverButton = new objects.Button("StartOverButton", 290, 415);
            this._startOverButton.on("click", this._clickStartOverButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._startOverButton);
            stage.addChild(this);
        };
        Death1.prototype.update = function () {
        };
        // PRIVATE METHODS
        // EVENT HANDLERS
        Death1.prototype._clickStartOverButton = function (event) {
            changeState(config.START_STATE);
        };
        return Death1;
    })(objects.Scene);
    states.Death1 = Death1;
})(states || (states = {}));
