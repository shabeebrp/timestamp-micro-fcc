//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var express = require('express');
var app = express();
//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
app.get('/',function(req,res){
  res.end('Hello world\n');
})
app.listen(process.env.PORT || 3000, function(){
  console.log("Chat server listening at "+process.env.PORT);
});
