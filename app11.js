//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');
var path = require('path');
var expressErrorHandler = require('express-error-handler');
var cookieParser = require('cookie-parser');

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

//cookie-parser 설정
app.use(cookieParser());

//라우팅 함수 등록
var router = express.Router();
router.route('/process/setUserCookie').get(function (req, res) {
    console.log('/process/setUserCookie 호출됨.');
    // 쿠키 설정
    res.cookie('user', {
        id: 'mike',
        name: '소녀시대',
        authorized: true
    });
    // redirect로 응답
    res.redirect('/process/showCookie');
});


router.route('/process/showCookie').get(function (req, res) {
    console.log('/process/showCookie 호출됨.');
    res.send(req.cookies);
});

//라우터 객체를 app 객체에 등록
app.use('/', router);

http.createServer(app).listen(3000, function () {
    console.log('Express server listening on port ' + app.get('port'));
});