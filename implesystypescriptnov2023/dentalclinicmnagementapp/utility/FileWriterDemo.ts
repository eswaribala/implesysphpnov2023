const fileRef=require("fs")

console.log("Going to write into existing file");

fileRef.writeFile('input_new.txt', "PHP,PERL,Python",
    function(err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!");

});


// Asynchronous read
fileRef.readFile('input_new.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});
// Synchronous read
var data = fileRef.readFileSync('C:\\Users\\Balasubramaniam\\Desktop\\break timings.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");




