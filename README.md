# 2021-Database

## 3주차 Database table
1. week3 이름의 Database 생성하였습니다.
~~~sql
create schema if not exists 'week3' default character set utf8mb4;   
use week8;
~~~   
2. student 이름의 Table을 만들었고, 학번, 성명, 학과, 학년, 입학일자, 이메일 이름의 칼럼을 각 Data 속성에 맞게 하여 추가했습니다.
~~~sql
create table student;   
alter table student add 학번 int not null,   
alter table student add 성명 varchar(10) not null,   
alter table student add 학과 varchar(15) not null,   
alter table student add 학년 tinyint not null,   
alter table student add 입학일자 text not null,   
alter table student add 이메일 text not null;
~~~
3. 각 컬럼의 Data 속성에 맞게 내용을 입력하여 추가했습니다.
~~~sql
 insert into student values (12161700, '김상현', '정보통신공학과', 3, 'Tue Mar 01 2016 00:00:00 GMT+0900 (대한민국 표준시)', 'sh02092@inha.edu');   
 insert into student values (12123456, '김철수', '정보통신공학과', 4, 'Thu Mar 01 2012 00:00:00 GMT+0900 (대한민국 표준시)', '철수@gmail.com');   
 insert into student values (12211234, '홍길동', '정보통신공학과', 1, 'Mon Mar 01 2021 00:00:00 GMT+0900 (대한민국 표준시)', '길동@gmail.com');   
 insert into student values (12174321, '김영희', '정보통신공학과', 4, 'Wed Mar 01 2017 00:00:00 GMT+0900 (대한민국 표준시)', '영희@gmail.com');   
~~~
4. 'select * from (테이블 이름)' 명령어를 사용하여 입력한 Data를 볼 수 있습니다.
~~~sql
select * from student;   
~~~
학번|성명|학과|학년|입학일자|이메일
---|---|---|---|---|---|
12161700|김상현|정보통신공학과|3|TUE Mar 01 2016 00:00:00 GMT+0900 (대한민국 표준시)|sh02092@inha.edu|
12123456|김철수|정보통신공학과|4|THU Mar 01 2012 00:00:00 GMT+0900 (대한민국 표준시)|철수@gmail.com|
12211234|홍길동|정보통신공학과|1|MON Mar 01 2021 00:00:00 GMT+0900 (대한민국 표준시)|길동@gmail.com|
12174321|김영희|정보통신공학과|4|WED Mar 01 2017 00:00:00 GMT+0900 (대한민국 표준시)|영희@gmail.com|

## 8주차 Database table
1. week8 이름의 Database 생성하였습니다.
~~~sql
create schema if not exists 'week8' default character set utf8mb4;   
use week8;
~~~
2. employee, department 테이블을 만들고, 관계를 만들었습니다.
~~~sql
create table employee(  
Fname varchar(10) not null,  
Minit char,  
Lname varchar(20) not null,  
Ssn char(9) not null,  
Bdate date,  
Address varchar(30),  
Sex char(1),  
Salary decimal(5),  
Super_ssn char(9),  
Dno int not null,  
primary key(Ssn)); //Ssn을 PK로 지정하였습니다.  

create table department(  
Dname varchar(15) not null,  
Dnumber int not null,  
Mgr_ssn char(9) not null,  
Mgr_start_date date,  
primary key(Dnumber), //Dnumber를 PK로 지정하였습니다.  
unique(Dname), //Dname을 unique key로 지정하였습니다.  
foreign key(Mgr_ssn) references employee(Ssn)); //department table의 Mgr_ssn을 employee table의 Ssn의 foreign key로 지정하였습니다.
~~~
3. 두 테이블의 관계를 고려하여 employee data를 입력한 이후 department data를 입력하였습니다.
- emplyee data 입력
~~~sql
insert into employee values('철수', 'M', '김', 12123456, 2000-01-01, '인천', '남', 1000, , 1);
select * from employee;
~~~
Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
---|---|---|---|---|---|---|---|---|---|
철수|M|김|12123456|2000-01-01|인천|남|1000||1|
- department data 입력
~~~sql
insert into department values('정보통신공학과', 1, 12123456, 2021-01-01);
select * from department;
~~~
Dname|Dnumber|Mgr_ssn|Mgr_start_date
---|---|---|---|
정보통신공학과|1|12123456|2021-01-01|

## 10주차 Database table
1. week10 이름의 database를 생성하였습니다.
~~~sql
create schema if not exists 'week10' default character set utf8mb4;   
use week10;
~~~
2. student 테이블을 만들고, data를 입력하였습니다.
~~~sql
create table student(
    Sname varchar(10) not null,
    Snumber int not null,
    primary key (Sname) //Sname을 PK로 지정하였습니다.
);

insert into student values('김상현', 12161700);
insert into student values('김영희', 12161720);
insert into student values('김철수', 12161735);
insert into student values('박영희', 12161751);
insert into student values('박철수', 12161753);
insert into student values('홍길동', 12161800);

select * from student;
~~~
Sname|Snumber
---|---|
김상현|12161700|
김영희|12161720|
김철수|12161735|
박영희|12161751|
박철수|12161753|
홍길동|12161800|

## 11주차 보고서
이번 실습에서는 3주차, 8주차, 10주차에 만든 실습 과제를 github에 업로드하고, 
실습의 DB table 내용에 대한 설명을 Markdown 문법을 사용하여 README.md 파일에 작성하는 실습을 진행하였습니다.

실습 과제를 github에 업로드하기 위해 우선 github에 새로운 repository를 public으로 생성하고, 로컬 폴더와 연결하였습니다. 넣고 싶은 파일을 로컬 폴더 안에 넣고, 큰 용량을 차지하는 'node_modules' 파일은 제외하기 위해 .gitignore 파일을 만들어 경로 지정하여 제외하였습니다.  
<img src="./picture.png" width="40%" height="30%"></img>

이후 wsl terminal에
> git add .  
git commit -m "설명"  
git push  

명령어를 통해 git 저장소에 업로드하였습니다.

query문을 코드블록화 하기 위해 
> '~~~sql (코드작성) ~~~' 하여 작성하였습니다.

 또한 표를 만들기 위해 
 > '|' '---' 명령어를 사용하였습니다.

앞으로 github를 사용하는 빈도수가 잦아질 것 같은데 이번 실습을 통해 github를 다루는게 익숙해진 것 같습니다.