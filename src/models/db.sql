create database quan_li_cong_nhan

create table employee 
(
    id int primary key auto_increment,
    firstName varchar(200) not null,
    lastName varchar(200) not null,
    email varchar(200) not null,
    dob date ,
    gender varchar(20),
    education varchar(100),
    company varchar(150),
    experience int ,
    pkg float
)

INSERT INTO `employee`(`firstName`, `lastName`, `email`, `dob`, `gender`, `education`, `company`, `experience`, `pkg`) VALUES ('test','admin','admin@gmail.com','2000-10-21','female','aptech','mycat',27, 18.00)

INSERT INTO `employee`(`firstName`, `lastName`, `email`, `dob`, `gender`, `education`, `company`, `experience`, `pkg`) VALUES ('test2','admin2','admin2@gmail.com','2002-7-12','male','fpt','mycat2',28, 65.00)