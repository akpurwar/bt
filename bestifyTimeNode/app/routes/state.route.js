module.exports = app => {
    const state = require("../controllers/state.controller.js");
    
    var router = require("express").Router();
    router.post("/", state.addState);
    
    app.use('/api/state', router);
};

