import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

// localhost:3000/delete
router.get('/', async (req, res) => {
    //const department = await selectSql.getDepartment();
    const student = await selectSql.getStudent();

    res.render('delete', {
        title: "삭제 기능",
        student
        //department
    })
});

router.post('/', async (req, res) => {
    // req.body : 버튼에 대한 정보
    // 버튼을 눌렀을 때, 그 버튼의 value 속성 값을 갖는다.
    console.log('delete router: ', req.body.delBtn);

    // Snumber 값을 data로 넘겨주고
    const data = {
        //Dnumber: req.body.delBtn,
        Snumber: req.body.delBtn,
    };

    // deleteSql의 deleteStudent에 data 넘겨준다.
    //await deleteSql.deleteDepartment(data);
    await deleteSql.deleteStudent(data);

    res.redirect('/delete'); // localhost:3000/delete
});

module.exports = router;