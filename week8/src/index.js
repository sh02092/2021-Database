// 쓰고자 하는 module 선언
// express 이름으로 express module
// logger 이름으로 morgan module
// path 이름으로 path module : 경로설정 불러오기
import express from "express";
import logger from "morgan";
import path from "path";

// 파일에서 불러오고 싶으면 현재 폴더 기준으로 경로 설정하여 module 불러오기
// home 화면
import homeRouter from "../routes/home";
// 수정
import updateRouter from "../routes/update";
// 조회
import selectRouter from "../routes/select";

// 3000번 port 사용하겠다.
const PORT = 3000;

// 서버 연결해주는 module
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

// router 주소 설정
// 각 주소당 사용하는 router를 함수로 넘겨줌
app.use('/', homeRouter);
app.use('/update', updateRouter);
app.use('/select', selectRouter);

    // listen 명령어로 서버 실행, router 선언 모두 한 이후 실행해야 함  
    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`)
    })