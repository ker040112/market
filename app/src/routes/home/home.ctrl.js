"use strict";

const users = {
    id : ["woo", "hi", "김김김"],
    psword : ["123", "3333", "12312"],
};

const output = {
    home : (req, res)=>{
        res.render("home/index");
    },

    login : (req, res)=>{
        res.render("home/login");
    },
}; 

const process = {
    login : (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        if(users.id.includes(id)){  //includes는 해당 문자열에 인자값이 존재하는지 확인. 즉 users.id라는 배열에 id값이 존재하는지 확인
            const idx = users.id.indexOf(id); //indexof는 배열에 해당값이 있는지 확인. 즉 users.id배열에 id값이 있는지 보고 그 인덱스값을 반환
            if(users.psword[idx] === psword){ //그 받은 인덱스값으로 user.psword배열에서 짝이 되는 값을 찾아서 입력한 psword가 배열에 있는지 확인
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "login false",
        });
    },
};

module.exports = {
    output,
    process,
};