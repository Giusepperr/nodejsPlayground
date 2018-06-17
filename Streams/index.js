/*Streams are object that let you to read and write in a continuos fashion
there are 4 types:

Readable − Stream which is used for read operation.

Writable − Stream which is used for write operation.

Duplex − Stream which can be used for both read and write operation.

Transform − duplex stream where output is computed based on the input*/

/*this are all instance of the event emitter which has this events:

data − This event is fired when there is data is available to read.

end − This event is fired when there is no more data to read.

error − This event is fired when there is any error receiving or writing data.

finish − This event is fired when all the data has been flushed to underlying system.
*/

var fs = require("fs");

var data = '';

//Create a readable Stream
var readerStream = fs.createReadStream('input.txt');

//Set the encoding to be utf8
readerStream.on('data', function(chunk){
data += chunk;
});

readerStream.on('end', function(){
	console.log(data);
});
readerStream.on('error', function(err){
	console.log(err.stack);
});

console.log("Program Ended")
