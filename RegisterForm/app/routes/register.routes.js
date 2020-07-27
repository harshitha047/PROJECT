module.exports = app =>{
    const registers = require('../controllers/register.controller.js');

    //create a new register
    app.post ("/registerform",registers.create);
    //single user
    app.get("/registerform",registers.findOne);
}