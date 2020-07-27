const sql = require('../models/db.js');

const Register = function(register){
    this.username = register.username;
    this.mobile = register.mobile;
    this.password = register.password;
    this.email = register.email;
    this.address = register.address;
};

Register.create = (newRegister,result) => {
    sql.query('insert into registerform set ?',newRegister,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Created Register : ",{id:res.insertedId,...newRegister});
        return (null,{id:res.insertedId,...newRegister});
    })
};

Register.findById = (username,password,result) => {
    sql.query(`select * from registerform where username = '${username}' and password = '${password}'`,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        if(res.length){
            console.log('Found Register:',res[0]);
            result(null,res[0]);
            return;
        }
        result({kind:'not_found'},null);
    })
};
module.exports = Register;