var config;
(function (config) {
    // STATE CONSTANTS 
    config.START_STATE = 0;
    config.R_STATE = 1;
    config.RB_STATE = 2;
    config.G_STATE = 3;
    config.GG_STATE = 4;
    config.GGO_STATE = 5;
    config.B_STATE = 6;
    config.BR_STATE = 7;
    config.BG_STATE = 8;
    config.BGR_STATE = 9;
    config.BB_STATE = 10;
    config.DEATH1_STATE = 11;
    config.DEATH2_STATE = 12;
    config.DEATH3_STATE = 13;
    config.DEATH4_STATE = 14;
    config.DEATH5_STATE = 15;
    config.WIN_STATE = 16;
})(config || (config = {}));
