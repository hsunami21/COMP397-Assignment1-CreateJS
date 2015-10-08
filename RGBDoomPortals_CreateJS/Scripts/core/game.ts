/*
    Source name: RGB Doom Portals
    Author: Wendall Hsu 300739743
    Last Modified By: Wendall Hsu
    Date Last Modified: October 8, 2015
    Program Description: You play as Mr.White, an experimental test subject who has been drugged and put into a deep sleep.In your sleep, you dream about waking up in a room that contains
                         three coloured portals - a red one, a green one, and a blue one.You must choose the portal that will lead to your safety, but be wary, for if you choose the wrong
                         one, you will suffer a terrible death and will never wake from your sleep.Now...which colour is your favourite?

    Revision History:
        Commit #1: Initial commit and completion of three states: start, portal 1, portal 2 (wrong path)
        Commit #2: Added first death state
        Commit #3: Completed all death scenes and win scene. Finished first red portal path
        Commit #4: Completed green path
        Commit #5: Completed full game
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

/// <reference path="../states/win.ts" />
/// <reference path="../states/death5.ts" />
/// <reference path="../states/death4.ts" />
/// <reference path="../states/death3.ts" />
/// <reference path="../states/death2.ts" />
/// <reference path="../states/death1.ts" />

/// <reference path="../states/bg.ts" />
/// <reference path="../states/bgr.ts" />
/// <reference path="../states/br.ts" />
/// <reference path="../states/bb.ts" />
/// <reference path="../states/b.ts" />
/// <reference path="../states/ggo.ts" />
/// <reference path="../states/gg.ts" />
/// <reference path="../states/g.ts" />
/// <reference path="../states/rb.ts" />
/// <reference path="../states/r.ts" />
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
var r: states.R;
var rb: states.RB;
var g: states.G;
var gg: states.GG;
var ggo: states.GGO;
var b: states.B;
var bb: states.BB;
var br: states.BR;
var bg: states.BG;
var bgr: states.BGR;
var death1: states.Death1;
var death2: states.Death2;
var death3: states.Death3;
var death4: states.Death4;
var death5: states.Death5;
var win: states.Win;

// MANIFEST OF ALL ASSETS
var manifest = [
    { id: "BlueButton", src: "../../Assets/images/BlueButton.png" }, 
    { id: "BrownButton", src: "../../Assets/images/BrownButton.png" },
    { id: "CyanButton", src: "../../Assets/images/CyanButton.png" },
    { id: "GreenButton", src: "../../Assets/images/GreenButton.png" },
    { id: "OrangeButton", src: "../../Assets/images/OrangeButton.png" },
    { id: "PinkButton", src: "../../Assets/images/PinkButton.png" },
    { id: "PurpleButton", src: "../../Assets/images/PurpleButton.png" },
    { id: "RedButton", src: "../../Assets/images/RedButton.png" },
    { id: "StartOverButton", src: "../../Assets/images/StartOverButton.png" },
    { id: "Yay", src: "../../Assets/audio/yay.ogg" }
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
            // show start scene
            stage.removeAllChildren();
            start = new states.Start();
            currentState = start;
            break;

        case config.R_STATE:
            // show portal 1 path scene
            stage.removeAllChildren();
            r = new states.R();
            currentState = r;
            break;

        case config.RB_STATE:
            // red | blue path scene
            stage.removeAllChildren();
            rb = new states.RB();
            currentState = rb;
            break;

        case config.G_STATE:
            // show portal 1 path scene
            stage.removeAllChildren();
            g = new states.G();
            currentState = g;
            break;

        case config.GG_STATE:
            // green | green path scene
            stage.removeAllChildren();
            gg = new states.GG();
            currentState = gg;
            break;

        case config.GGO_STATE:
            // green | green | orange path scene
            stage.removeAllChildren();
            ggo = new states.GGO();
            currentState = ggo;
            break;

        case config.B_STATE:
            // show portal 1 path scene
            stage.removeAllChildren();
            b = new states.B();
            currentState = b;
            break;

        case config.BR_STATE:
            // blue | red path scene
            stage.removeAllChildren();
            br = new states.BR();
            currentState = br;
            break;

        case config.BG_STATE:
            // blue | green path scene
            stage.removeAllChildren();
            bg = new states.BG();
            currentState = bg;
            break;

        case config.BGR_STATE:
            // blue | green path scene
            stage.removeAllChildren();
            bgr = new states.BGR();
            currentState = bgr;
            break;

        case config.BB_STATE:
            // blue | blue path scene
            stage.removeAllChildren();
            bb = new states.BB();
            currentState = bb;
            break;

        case config.DEATH1_STATE:
            // show death 1 scene
            stage.removeAllChildren();
            death1 = new states.Death1();
            currentState = death1;
            break;

        case config.DEATH2_STATE:
            // show death 2 scene
            stage.removeAllChildren();
            death2 = new states.Death2();
            currentState = death2;
            break;

        case config.DEATH3_STATE:
            // show death 3 scene
            stage.removeAllChildren();
            death3 = new states.Death3();
            currentState = death3;
            break;

        case config.DEATH4_STATE:
            // show death 4 scene
            stage.removeAllChildren();
            death4 = new states.Death4();
            currentState = death4;
            break;

        case config.DEATH5_STATE:
            // show death 5 scene
            stage.removeAllChildren();
            death5 = new states.Death5();
            currentState = death5;
            break;

        case config.WIN_STATE:
            // show win scene
            stage.removeAllChildren();
            win = new states.Win();
            currentState = win;
            break;
    }

    currentState.start();
    console.log(currentState.numChildren);
}