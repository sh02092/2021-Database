import express from "express";
// 사용자가 만든 module 불러올 때 중괄호 사용한다.
import { selectSql } from "../database/sql";

const router = express.Router();

// 위치 / : localhost:3000/select
router.get('/', async function(req, res) {
    // selectSql에서 getEmployee() 불러와서 employee에 저장 
    const employee = await selectSql.getEmployee();
    // selectSql에서 getDepartment() 불러와서 department에 저장
    const department = await selectSql.getDepartment();

    // select.hbs 파일 불러와서 title, title2, employee, department data 넘겨주는 방법 (테이블 형태)
    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;