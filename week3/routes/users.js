// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// // module.exports = router;

// import express from "express";
// import sql from "../database/sql";
var express=require('express');
var sql=require('../database/sql');

const router = express.Router();
router.get('/', async function(req, res, next) {

  const users = await sql.getUsers()
  console.log(users);
  res.render('users', {
    title: '사용자 목록',
    users
  });
});
module.exports = router;