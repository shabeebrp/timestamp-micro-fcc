//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var express = require('express');
var app = express();
var moment = require('moment');
var path = require('path');
//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
app.use(express.static(path.join(__dirname,'public')));
app.get('/:date',function(req,res){
    var out = {
        unix: null,
        natuaral: null
    }
    if(!isNaN(req.params.date)){
          out.unix = +req.params.date;
          out.natuaral = moment(+(req.params.date)*1000).format('MMMM DD, YYYY');
      }
    else if(!isNaN(Date.parse(req.params.date))){
       // var date = moment(req.params.date,'MMMM DD, YYYY');
         out.unix =moment(req.params.date,'MMMM DD, YYYY').format('X');
         out.natuaral = req.params.date;
      }

    res.send(out);
})
app.listen(process.env.PORT || 3000, function(){
  console.log("Chat server listening at "+process.env.PORT);
});
