/* writable - stream is used for write operation*/

/*this are all instance of the event emitter which has this events:

data − This event is fired when there is data is available to read.

end − This event is fired when there is no more data to read.

error − This event is fired when there is any error receiving or writing data.

finish − This event is fired when all the data has been flushed to underlying system.
*/

var fs = require ("fs");

var data = "simply easy Learning";

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'UTF8');

writerStream.end();

writerStream.on('finish', function(){
	console.log("write completed.");
});

writerStream.on('error', function(err){
	console.log(err.stack);
})

console.log("Program Ended");
