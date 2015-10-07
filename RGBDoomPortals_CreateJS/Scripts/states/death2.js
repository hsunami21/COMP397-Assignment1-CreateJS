var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    var Death2 = (function (_super) {
        __extends(Death2, _super);
        // CONSTRUCTOR
        function Death2() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Death2.prototype.start = function () {
            // hello label
            this._textLabel = new objects.Label("You step through the portal and find yourself teleported \
\n\n\nonto the surface of Mars. A voice speaks out and says, \
\n\n\n\"Maybe next time you should take a deep breath before \
\n\n\nentering a portal!\" As you gasp for air, you realize that \
\n\n\nthis is the end.", "18px Consolas", "#000000", 320, 190);
            this.addChild(this._textLabel); // add label to the stage
            // start over button
            this._startOverButton = new objects.Button("StartOverButton", 290, 415);
            this._startOverButton.on("click", this._clickStartOverButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._startOverButton);
            stage.addChild(this);
        };
        Death2.prototype.update = function () {
        };
        // PRIVATE METHODS
        // EVENT HANDLERS
        Death2.prototype._clickStartOverButton = function (event) {
            changeState(config.START_STATE);
        };
        return Death2;
    })(objects.Scene);
    states.Death2 = Death2;
})(states || (states = {}));
