//the buffer class is intended to work with raw binary data in node
//the data is handled similar to an array of integers
//its a global class.

var buf = new Buffer(10);

var buf = new Buffer([10,20,30,40,50]);

//method buf.write(string[,offset][, lenght][, encoding])

buf = new Buffer(256);
len = buf.write("simply Easy learning");

console.log("Octets written : "+ len);

//method buf.toString([encoding][,start][,end])

buf = new Buffer(26);
for (var i =0; i<26; i++){
buf[i]= i+97;
}
console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

//method buf.toJSON()

var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);

//global method concat 

//Buffer.concat(list[, totalLength])


var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());

//method compare

var otherBuffer = new Buffer('TutorialsPoint ');
buffer1.compare(otherBuffer);

//method copy buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
var buffer1 = new Buffer('ABC');

//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

//method slice buf.slice([start][, end])
var buffer1 = new Buffer('TutorialsPoint');

//slicing a buffer
var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());

//method length buf.length();
var buffer = new Buffer('TutorialsPoint');

//length of the buffer
console.log("buffer length: " + buffer.length);
