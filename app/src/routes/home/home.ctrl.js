"use strict";

const User = require("../../models/User");


const output = {
    home : (req, res)=>{
        res.render("home/index");
    },

    login : (req, res)=>{
        res.render("home/login");
    },

    register : (req, res)=>{
        res.render("home/signup");
    },
}; 
 
 const process = {
     login : async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        console.log("ctrl", response);
        return res.json(response);
    },

    register : async (req, res) => {
        const user = new User(req.body);
        console.log("ctrl", req.body);
        const response = await user.register();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};