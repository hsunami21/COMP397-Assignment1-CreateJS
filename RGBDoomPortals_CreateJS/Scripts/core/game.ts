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

/// <reference path="../states/p2_wrong.ts" />
/// <reference path="../states/p1.ts" />
/// <reference path="../states/start.ts" />




// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var currentState: objects.Scene; // alias for current state
var assets: createjs.LoadQueue;

// GAME OBJECTS
var start: states.Start;
var p1: states.P1;
var p2_wrong: states.P2_Wrong;

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

function preload(): void {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
}

function init(): void {
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
function gameLoop(event: createjs.Event): void {
    stats.begin(); // start counting

    currentState.update(); // calling State's update method
    stage.update(); // redraw/refresh stage every frame

    stats.end(); // stop counting
} 

// SETUP GAME STATS
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// STATE MACHINE
function changeState(state): void {
    // launch various scenes

    switch (state) {
        case config.START_STATE: 
            // show menu scene
            stage.removeAllChildren();
            start = new states.Start();
            currentState = start;
            break;

        case config.P1_STATE:
            // show play scene
            stage.removeAllChildren();
            p1 = new states.P1();
            currentState = p1;
            break;

        case config.P2_WRONG_STATE:
            // show game over scene
            stage.removeAllChildren();
            p2_wrong = new states.P2_Wrong();
            currentState = p2_wrong;
            break;
    }

    currentState.start();
    console.log(currentState.numChildren);
}