//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');
var path = require('path');
var expressErrorHandler = require('express-error-handler');

//Express의 미들웨어 불러오기
var bodyParser = require('body-parser');
var static = require('serve-static');

//익스프레스 객체 생성
var app = express();

app.set('port', process.env.PORT || 3000);

//body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }));

//body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

//app.use('/public', 추가)
app.use('/public', static(path.join(__dirname, 'public')));

//라우터 객체 참조
var router = express.Router();

//라우팅 함수 등록
router.route('/process/login/:name').post(function (req, res) {
    console.log('/process/login/:name 처리함.');
    var paramName = req.params.name;
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    res.writeHead('200', { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param name: ' + paramName + '</p></div>');
    res.write('<div><p>Param id: ' + paramId + '</p></div>');
    res.write('<div><p>Param password: ' + paramPassword + '</p></div>');
    res.write("<br><br><a href='/public/login3.html'>로그인 페이지로 돌아가기</a>");
    res.end();
})

//라우터 객체를 app 객체에 등록
app.use('/', router);

//404 에러 페이지 처리
var errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

// //등록되지 않은 패스에 대해 페이지 오류 응답
// app.all('*', function (req, res) {
//     res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
// });

http.createServer(app).listen(3000, function () {
    console.log('Express server listening on port ' + app.get('port'));
});