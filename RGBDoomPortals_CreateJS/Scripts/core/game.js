/*

    Source name: RGB Doom Portals
    Author: Wendall Hsu 300739743
    Last Modified By: Wendall Hsu
    Date Last Modified: October 5, 2015
    Program Description: You play as Mr.White, an experimental test subject who has been drugged and put into a deep sleep.In your sleep, you dream about waking up in a room that contains
                         three coloured portals - a red one, a green one, and a blue one.You must choose the portal that will lead to your safety, but be wary, for if you choose the wrong
                         one, you will suffer a terrible death and will never wake from your sleep.Now...which colour is your favourite?

    Revision History:
        Commit #1: Initial commit and completion of three states: start, portal 1, portal 2 (wrong path)
        Commit #2: Added first death state

*/
/// <reference path="../config/config.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/scene.ts" />
/// <reference path="../states/death1.ts" />
/// <reference path="../states/p2_wrong.ts" />
/// <reference path="../states/p1.ts" />
/// <reference path="../states/start.ts" />
// GLOBAL GAME FRAMEWORK VARIABLES
var canvas;
var stage;
var stats;
var state;
var currentState; // alias for current state
var assets;
// GAME OBJECTS
var start;
var p1;
var p2_wrong;
var death1;
// MANIFEST OF ALL ASSETS
var manifest = [
    { id: "BlueButton", src: "../../Assets/images/BlueButton.png" },
    { id: "BrownButton", src: "../../Assets/images/BrownButton.png" },
    { id: "CyanButton", src: "../../Assets/images/CyanButton.png" },
    { id: "GreenButton", src: "../../Assets/images/GreenButton.png" },
    { id: "OrangeButton", src: "../../Assets/images/OrangeButton.png" },
    { id: "PinkButton", src: "../../Assets/images/PinkButton.png" },
    { id: "PurpleButton", src: "../../Assets/images/PurpleButton.png" },
    { id: "RedButton", src: "../../Assets/images/RedButton.png" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
}
function init() {
    console.log("Game Started...");
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counter
    state = config.START_STATE; // set initial state
    changeState(state); // call main game function
}
// MAIN GAME LOOP
function gameLoop(event) {
    stats.begin(); // start counting
    currentState.update(); // calling State's update method
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // stop counting
}
// SETUP GAME STATS
function setupStats() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// STATE MACHINE
function changeState(state) {
    // launch various scenes
    switch (state) {
        case config.START_STATE:
            // show start scene
            stage.removeAllChildren();
            start = new states.Start();
            currentState = start;
            break;
        case config.P1_STATE:
            // show portal 1 path scene
            stage.removeAllChildren();
            p1 = new states.P1();
            currentState = p1;
            break;
        case config.P2_WRONG_STATE:
            // show portal 2 wrong path scene
            stage.removeAllChildren();
            p2_wrong = new states.P2_Wrong();
            currentState = p2_wrong;
            break;
        case config.DEATH1_STATE:
            // show death 1 scene
            stage.removeAllChildren();
            death1 = new states.Death1();
            currentState = death1;
            break;
    }
    currentState.start();
    console.log(currentState.numChildren);
}
