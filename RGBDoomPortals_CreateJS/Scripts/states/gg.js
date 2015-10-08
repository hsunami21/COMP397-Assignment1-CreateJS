var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    var GG = (function (_super) {
        __extends(GG, _super);
        // CONSTRUCTOR
        function GG() {
            _super.call(this);
        }
        // PUBLIC METHODS
        GG.prototype.start = function () {
            // hello label
            this._textLabel = new objects.Label("You step through the portal and end up in another room. \
\n\n\nCompared to the other rooms, the colours of the portals are \
\n\n\npurple, cyan, and orange. You see another note on a table and \
\n\n\non it reads: \"Green is indeed one of your favourite colours, \
\n\n\nMr.White. Now you must choose another one of your favourite \
\n\n\ncolours. Which one do you think it is?\" \
\n\n\n\n\nWhich portal do you go through?", "18px Consolas", "#000000", 320, 190);
            this.addChild(this._textLabel); // add label to the stage
            // purple portal button
            this._purpleButton = new objects.Button("PurpleButton", 135, 415);
            this._purpleButton.on("click", this._clickPurpleButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._purpleButton);
            stage.addChild(this);
            // orange portal button
            this._orangeButton = new objects.Button("OrangeButton", 335, 415);
            this._orangeButton.on("click", this._clickOrangeButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._orangeButton);
            stage.addChild(this);
            // cyan portal button
            this._cyanButton = new objects.Button("CyanButton", 535, 415);
            this._cyanButton.on("click", this._clickCyanButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._cyanButton);
            stage.addChild(this);
        };
        GG.prototype.update = function () {
        };
        // PRIVATE METHODS
        // EVENT HANDLERS
        GG.prototype._clickPurpleButton = function (event) {
            changeState(config.DEATH4_STATE);
        };
        GG.prototype._clickOrangeButton = function (event) {
            changeState(config.GGO_STATE);
        };
        GG.prototype._clickCyanButton = function (event) {
            changeState(config.DEATH4_STATE);
        };
        return GG;
    })(objects.Scene);
    states.GG = GG;
})(states || (states = {}));
