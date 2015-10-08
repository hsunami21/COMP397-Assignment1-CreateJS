var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    var GGO = (function (_super) {
        __extends(GGO, _super);
        // CONSTRUCTOR
        function GGO() {
            _super.call(this);
        }
        // PUBLIC METHODS
        GGO.prototype.start = function () {
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
        };
        GGO.prototype.update = function () {
        };
        // PRIVATE METHODS
        // EVENT HANDLERS
        GGO.prototype._clickPinkButton = function (event) {
            changeState(config.WIN_STATE);
        };
        GGO.prototype._clickBrownButton = function (event) {
            changeState(config.DEATH5_STATE);
        };
        return GGO;
    })(objects.Scene);
    states.GGO = GGO;
})(states || (states = {}));
