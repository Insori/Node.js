var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.write("안녕하세요 인소리입니다. : silverlisten-1.js");
    res.end();
}).listen(3000);

