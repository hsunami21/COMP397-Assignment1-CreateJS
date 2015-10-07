var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    var Death5 = (function (_super) {
        __extends(Death5, _super);
        // CONSTRUCTOR
        function Death5() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Death5.prototype.start = function () {
            // hello label
            this._textLabel = new objects.Label("You step through the portal and find yourself strapped into \
\n\n\na chair. You hear voices whispering all around you. Then a \
\n\n\nman walks up to you and says, \"Mr.White... You have chosen \
\n\n\nthe wrong portal. Who in their right mind would go for the \
\n\n\nbrown? It's too bad... You were so close.\" Everything goes \
\n\n\nblack and you hear him laughing. The laughing grows fainter \
\n\n\nand fainter until... Nothing.", "18px Consolas", "#000000", 320, 190);
            this.addChild(this._textLabel); // add label to the stage
            // start over button
            this._startOverButton = new objects.Button("StartOverButton", 290, 415);
            this._startOverButton.on("click", this._clickStartOverButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._startOverButton);
            stage.addChild(this);
        };
        Death5.prototype.update = function () {
        };
        // PRIVATE METHODS
        // EVENT HANDLERS
        Death5.prototype._clickStartOverButton = function (event) {
            changeState(config.START_STATE);
        };
        return Death5;
    })(objects.Scene);
    states.Death5 = Death5;
})(states || (states = {}));
