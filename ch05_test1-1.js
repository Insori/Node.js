//http 모듈로 웹 서버 만들기

var http = require('http');

//웹 서버 객체를 만듭니다.
var server = http.createServer();

//웹 서버를 시작하여 3000번 포트에서 대기하도록 합니다.
var host = '10.96.124.114';
var port = 3000;
server.listen(port, host, '50000', function() { //50000 = 한 번에 접속할 수 있는 클라이언트 수
    console.log('웹 서버가 시작되었습니다. -> ', host + ' : ' + port);
});