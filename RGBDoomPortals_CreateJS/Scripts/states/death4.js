var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    var Death4 = (function (_super) {
        __extends(Death4, _super);
        // CONSTRUCTOR
        function Death4() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Death4.prototype.start = function () {
            // hello label
            this._textLabel = new objects.Label("You step through the portal and find yourself staring into \
\n\n\na mirror. A voice speaks out and says, \"It seems you don't \
\n\n\nwant to get out alive. Oh well...\" You see yourself grip your \
\n\n\nchest and the next thing you know, your chest is in immense \
\n\n\npain. You realize that you’re having a heart attack and at \
\n\n\nthat moment, you know that this is the end.", "18px Consolas", "#000000", 320, 190);
            this.addChild(this._textLabel); // add label to the stage
            // start over button
            this._startOverButton = new objects.Button("StartOverButton", 290, 415);
            this._startOverButton.on("click", this._clickStartOverButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._startOverButton);
            stage.addChild(this);
        };
        Death4.prototype.update = function () {
        };
        // PRIVATE METHODS
        // EVENT HANDLERS
        Death4.prototype._clickStartOverButton = function (event) {
            changeState(config.START_STATE);
        };
        return Death4;
    })(objects.Scene);
    states.Death4 = Death4;
})(states || (states = {}));
