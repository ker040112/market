"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }


    async login(){
        const client = this.body;
        const { id, psword } =  await UserStorage.getUserInfo(client.id);
        console.log("User", id, psword);

                if(id){
                if(id === client.id && psword === client.psword){
                    return { success : true};
                }
                return { success : false, msg: "password not correct"};
            }
            return {success : false, msg : "id not exist"};
        }
            

    async register(){
        const client = this.body;
        try{
        const response = await UserStorage.save(client);
        console.log("userReg", response);
        return response;
        } catch (err){
            return {success : false, msg: err};
        }
    }
}

module.exports = User;