const express = require("express");
const app = express();
const server = require('http').Server(app);
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(require("body-parser").json());



app.get('/', function (req, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'X-CUSTOM, Content-Type');
    // const resultsSet = req.body;
    // console.log(resultsSet);
    // pushEvent(JSON.stringify({resultSet: resultsSet.text}), resultsSet.json);
    // res.end();
    console.log("asdasd");
});

// app.post('/TimeInsert', function (req, res) {
//     const resultsSet = req.body;
//     InsertTimeQuery(resultsSet).then(function(resp){
//         console.log(resp);
//         // res.send(resp);
//     }).catch(function(err){
//         res.send(err);
//     });
// });
//
// app.get('/courses', function (req, res) {
//     CoursesQuery().then(function(resp){
//         console.log(resp);
//         res.send(resp);
//     });
// });
//
// app.get('/sql', function (req, res) {
//     console.log(req.query);
//     LoginQuery(req.query).then(function (resp) {
//         console.log(resp);
//         if (resp.length < 1) {
//             res.send(undefined)
//         }
//         else {
//             res.send(resp);
//         }
//     })
//
// });
//
// app.get('/register', function (req, res) {
//     RegisterQuery(req.query).then(function (resp) {
//         delete req.query.password;
//         res.send(req.query);
//     }).catch(function(err){
//         res.send(undefined)
//     });
// });
//
//
// function RegisterQuery(JsonObject) {
//     return  SQLQuery("Insert INTO user (username,password,name) values (?,?,?)", [JsonObject.username, JsonObject.password, JsonObject.name]).then(function (resp) {
//         return resp
//     }).catch(function(err){
//         throw err
//     });
// }
//
//
// function LoginQuery(JsonObject) {
//     return SQLQuery("Select * from user Where username=?&&password=?", [JsonObject.username, JsonObject.password]).then(function (resp) {
//         resp.forEach((element) => delete element.password);
//         return resp;
//     });
// }
//
// function CoursesQuery() {
//     return SQLQuery("Select * from courses", []).then(function (resp) {
//         return resp;
//     });
// }
// function ShowTimeQuery(JsonObject) {
//     if (JsonObject === undefined){
//         return SQLQuery("select * from db1.time",[])
//     }
//     else {
//         return SQLQuery("select * from db1.time where date=?&&time=?",[JsonObject.date,JsonObject.time])
//     }
// }
//
// function InsertTimeQuery(JsonObject){
//     console.log(JsonObject);
//     return SQLQuery("Insert into db1.time (username,date,time) values (?,?,?)",[JsonObject.username,new Date (JsonObject).date, new Date(JsonObject.time)])
// }
// //
// // function SQLQuery(queryString, PreparedObjectsOrList) {
// //     const con = connectNow();
// //     const promise = new Promise((resolve, reject) => {
// //         con.connect(function (err) {
// //             if (err) {
// //                 connectNow.end();
// //                 console.log("connection error ending");
// //                 throw err;
// //             }
// //             connectNow().query(queryString, PreparedObjectsOrList, function (err, results, field) {
// //                 connectNow().end();
// //                 if (err) {
// //                     throw err;
// //                 } else {
// //                     resolve(JSON.parse(JSON.stringify(results)));
// //                 }
// //             })
// //         });
// //     });
// //     return promise;
// // }
//
// function connectNow() {
//     const con = mysql.createConnection({
//         host: "DESKTOP-J1KA7D1",
//         port: 3306,
//         user: "james",
//         password: "b501347b",
//         database: "db1"
//     });
//     return con;
// }
//
// function pushEvent(payload, pushSubscription) {
//     var vapidPublicKey = keyPairs.publicKey;
//     var vapidPrivateKey = keyPairs.privateKey;
//     var options = {
//         TTL: 60,
//
//         vapidDetails: {
//             subject: 'mailto: ',
//             publicKey: vapidPublicKey,
//             privateKey: vapidPrivateKey
//         }
//     };
//
//     webPush.sendNotification(
//         pushSubscription,
//         payload,
//         options
//     );
// }

server.listen(3000);