// home.hbs 파일을 form 하면, home 화면에 data 넘기는 파일
// router 함수를 위한 express module
import express from "express";
// insertSql module에서 query 관련된 함수 불러오기
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();

// home.hbs 파일 찾아서 그려라.
router.get('/', (req, res) => {
    res.render('home');
});

// home.hbs 에서 post로 넘겼기 때문에 post로 받는다.
router.post('/', (req, res) => {
    // 웹페이지에서 삽입하여 넘겨지는 data는 req.body에 저장된다.
    const vars = req.body;
    // 넘어오는 data, vars의 길이 var_length
    const var_lenth = Object.keys(req.body).length;

    // 4개보다 크면 Employee data
    if (var_lenth > 4) {
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };

        // insertSql module의 setEmployee 함수에 data 넘겨준다. 
        // sql.js 파일에서 setEmployee 함수 동작하며 database에 data 저장한다.
        insertSql.setEmployee(data);
    // 아니면 Department data
    } else {
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        // insertSql module의 setDepartment 함수에 data 넘겨준다.
        // sql.js 파일에서 setDepartment 함수 동작하며 database에 data 저장한다.
        insertSql.setDepartment(data);
    }

    // Employee 또는 Department data 삽입 한 이후 홈 화면으로 돌아가겠다. (새로고침)
    res.redirect('/');
})

module.exports = router;