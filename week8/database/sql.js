// 삽입, update, 조회 기능 모두 구현
import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ??{
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: 'tkdgus@98',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async / await 사용
const promisePool = pool.promise();

// selec query
// 3week 내용
// data 조회
// 외부에서 함수 불러와 사용할 때는 export 붙여서 써야 함
export const selectSql = {
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows
    },
}

// insert query
export const insertSql = {
    // data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
    setEmployee : async (data) => {
        // employee table에  data에 저장된 값들 넣는 query문.
        const sql = `insert into employee values ( 
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}", 
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;
            // sql을 query가 실행
             await promisePool.query(sql);
    },
    // data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
    setDepartment : async (data) => {
        // department table에 data에 저장된 값들 넣는 query문.
        const sql = `insert into department values ( "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;
        // sql을 query문 실행
        await promisePool.query(sql);
    },
}

// update query
// 조건 설정! 중요!!
export const updateSql = {
    updateEmployee : async () => {
        // where 조건을 만족하는 행에 대해서 salary 수정
        const sql = `update employee set salary = 500 where Minit = "F"`;
        await promisePool.query(sql);

    },
    updateDepartment : async (data) => {
        const sql = `update department set dname = "${date.Dname}" where Dnumber = 0`;
        await promisePool.query(sql);

    },
}