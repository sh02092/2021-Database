// Copyright 2021 kms
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

// const : 변경하지 못하는 변수
// let : 변경 가능한 변수
// async, await는 항상 같이 써야 한다.
router.post('/', async (req, res) => {
    // database에 input 한 데이터 불러오는 변수
    const vars = req.body;
    // database에서 user 정보를 가져와 users에 저장
    const users = await selectSql.getUsers();
    // 누구인지 지정해주기 위한 변수
    let whoAmI = '';
    // 로그인 유무 확인 변수
    let checkLogin = false;


    // map : callback 함수를 받아서 하나하나 비교하는 함수
    // 간결한 for문
    // users.map(function) (user) => { ... }와 같다.
    // 자동으로 index 값이 하나씩 증가
    users.map((user)=> {
        console.log(user.Id);
        // 입력하는 Id, Password 가 database 속 data와 동일하면,
        // 동일한지 체크하는 문법 '==='
        if(vars.id === user.Id && vars.password === user.Password){
            console.log('login success!');
            checkLogin = true;
            // Id가 admin이면,
            if (vars.id === 'admin'){
                whoAmI = 'admin';
            } 
            // Id가 user면,
            else{
                whoAmI = 'user';
            }
        }
    })

    // admin이면, /delete로 redirect
    if (checkLogin && whoAmI === 'admin'){
        res.redirect('/delete');
    } 
    // user면, /select로 redirect
    else if(checkLogin && whoAmI === 'user'){
        res.redirect('/select');
    } 
    // 둘다 아니면, send 명령어로 html tag창 보내 팝업창 띄움
    else{
        console.log('login failed!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
})

module.exports = router; 