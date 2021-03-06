"use strict";

const id = document.querySelector("#user_id"), 
    psword = document.querySelector("#user_pw"),
    loginBtn = document.querySelector("#button");

    loginBtn.addEventListener("click", login);
    
    console.log(id.value);

    function login(){
         const req = {
             id : id.value,
             psword : psword.value,
         };
         

         fetch("/login", {
             method: "POST",
             headers: {
                 "Content-Type" : "application/json",
             },
             body : JSON.stringify(req),
         }).then((res) => res.json())
           .then((res) => {
             if(res.success){
                 location.href = "/index";
             }
             else{
                 alert(res.msg);
             }
         });
    }