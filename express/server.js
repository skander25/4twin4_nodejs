let http = require('http');
 let url = require('url');
  var querystring = require('querystring');
   var server = http.createServer(function(req,res) { var params =querystring.parse(url.parse(req.url).query);
     res.writeHead(200,{"Content-Type": "text/plain "}); if('id' in params && 'login' in params) { res.write('Your id is ' + params['id'] + 'and your login' +params['login']);
     }
      else { res.write('Please enter your id and login!');
     } res.end(); });
