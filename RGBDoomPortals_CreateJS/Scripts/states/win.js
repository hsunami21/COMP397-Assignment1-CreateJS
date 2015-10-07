var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    var Win = (function (_super) {
        __extends(Win, _super);
        // CONSTRUCTOR
        function Win() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Win.prototype.start = function () {
            // hello label
            this._textLabel = new objects.Label("You step through the portal and find yourself looking into \
\n\n\nthe eyes of a beautiful woman. She asks, \"Stephen, are \
\n\n\nyou okay?!\" You nod your head. She then gives you a hug \
\n\n\nand says, \"Let's go home, baby. I've got a surprise for \
\n\n\nyou.\" You notice a table with a note on it. You go to it \
\n\n\nand read it: \"Congratulations, Mr.White. You chose the \
\n\n\nright path.\" You don't recall anything that happened, \
\n\n\nbut you know that you were lucky.", "18px Consolas", "#000000", 320, 190);
            this.addChild(this._textLabel); // add label to the stage
            // start over button
            this._startOverButton = new objects.Button("StartOverButton", 290, 415);
            this._startOverButton.on("click", this._clickStartOverButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._startOverButton);
            stage.addChild(this);
        };
        Win.prototype.update = function () {
        };
        // PRIVATE METHODS
        // EVENT HANDLERS
        Win.prototype._clickStartOverButton = function (event) {
            changeState(config.START_STATE);
        };
        return Win;
    })(objects.Scene);
    states.Win = Win;
})(states || (states = {}));
