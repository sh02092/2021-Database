import express from "express";
import { selectSql, updateSql } from "../database/sql";

// 수정을 위한 조회
const router = express.Router();

//기존의 입력 값 불러오기
// 위치 : localhost:3000/update/employee
router.get('/employee', async (req, res) => {
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee', {
        title: "직원 테이블 갱신",
        emp_res
    });
});

//기존의 입력 값 불러오기
// 위치 : localhost:3000/update/department
// get : data 받아서 보여줌
router.get('/department', async (req, res) => {
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment', {
        title: "부서 테이블 갱신",
        dept_res
    })
});

// 수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
// post : data 처리할 때 data 받아서 기능 수행
router.post('/employee', async (req, res) => {
    const vars = req.body;
    console.log(vars.salary);

    const data = {
        Salary: vars.salary
    }
    await updateSql.updateEmployee(data);

    res.redirect('/select');
});

// 수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/department', async (req, res) => {
    const vars = req.body;
    // console.log를 사용하여 입력한 값이 잘 나왔는지 확인
    console.log(vars.dname);

    const data = {
        Dname: vars.dname
    }
    //updateDepartment에 data 넘겨줌
    await updateSql.updateDepartment(data);

    // localhost:3000/select 화면으로 가서 전체 data 조회, 반영 잘 되었는지 확인
    res.redirect('/select');
});

module.exports = router;