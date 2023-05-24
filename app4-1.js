//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');
var fs = require('fs');

//익스프레스 객체 생성
var app = express();

app.use(function (req, res, next) {
    //실습 1
    // JSON 객체
    // var person ={name:'소녀시대',age:20};
    // res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    // res.end(person);

    //실습 2
    // var person ={name:'소녀시대',age:20};
    // var personStr = JSON.stringify(person);
    // res.writeHead('200', {'Content-Type':'application/json;charset=utf8'});
    // res.end(personStr);

    //실습 3
    // var person ={name:'소녀시대',age:20};
    // var personStr = JSON.stringify(person);
    // res.end(personStr);

    //실습 4
    // 데이터는 HTML 문자열
    // var person ={name:'소녀시대',age:20};
    // var personStr = JSON.stringify(person);
    // res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    // res.end(personStr);

    //실습 5
    // var person ={name:'소녀시대',age:20};
    // var personStr = JSON.stringify(person);
    // res.send(personStr);

    //실습 6
    // var person ={name:'소녀시대',age:20};
    // res.send(person);

    //실습 7
    // req.user = 'sunny';
    // res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    // res.end('<h1>Express 서버에서 ' + req.user + '를 res,wirteHead와 end로 응답한 결과입니다.</h1>');

    //실습 8
    // req.user = 'sunny';
    // res.send('<h1>Express 서버에서 ' + req.user + '를 send로 응답한 결과입니다.</h1>');

    //실습 9
    var filename = 'house.png';
    fs.readFile(filename, function (err, data) {
        res.send(data);
    });
});

http.createServer(app).listen(3000, function () {
    console.log('Express 서버가 3000번 포트에서 시작됨.');
});