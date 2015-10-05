var config;
(function (config) {
    // STATE CONSTANTS 
    config.START_STATE = 0;
    config.P1_STATE = 1;
    config.P2_WRONG_STATE = 2;
    config.P3_WRONG_STATE = 3;
    config.P2_RIGHT_STATE = 4;
    config.P3_RIGHT_STATE = 5;
    config.DEATH1_STATE = 6;
    config.DEATH2_STATE = 7;
    config.DEATH3_STATE = 8;
    config.DEATH4_STATE = 9;
    config.DEATH5_STATE = 10;
    config.WIN_STATE = 11;
})(config || (config = {}));
