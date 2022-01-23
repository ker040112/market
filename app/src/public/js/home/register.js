"use strict";

const id = document.querySelector("#user_id"), 
    psword = document.querySelector("#user_pw"),
    confirmPsword = document.querySelector("#user_pw_chk"),
    name = document.querySelector("#user_name"),
    registerBtn = document.querySelector("#button");
    
    registerBtn.addEventListener("click", register);
    
    function register(){
        if(!id.value) return alert("아이디를 입력해주십시오.");
        if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

         const req = {
             id : id.value,
             psword : psword.value,
             name: name.value,
         };
         
         console.log(req);

         fetch("/register", {
             method: "POST",
             headers: {
                 "Content-Type" : "application/json",
             },
             body : JSON.stringify(req),
         }).then((res) => res.json())
           .then((res) => {
             if(res.success){
                 location.href = "/login";
             }
             else{
                 alert(res.msg);
             }
         });
    }