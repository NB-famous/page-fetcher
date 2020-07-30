//// Example of request library ///

/* 

const request = require('request');
request('http://www.google.com', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); 

*/

///// Steps to follow  for this exercise ///////

/* 
Use the request library to make the HTTP request
Use Node's fs module to write the file
Use the callback based approach we've been learning so far
Do not use the pipe function
Do not use synchronous functions (see warning below) -> avoid using writeFileSync function -> this should be a async workflow
Use the let Args = process.argv.slice(2,4); to input web and directory location

*/

let args = process.argv.slice(2,4)

const request = require('request');
const fs = require('fs');

//for(let i = 0; i < args.length; i++){

    request(args[0], (err, resp, body) => {
            //console.log(body)
        fs.writeFile(args[1], body, (err) =>{
            if (err) throw err;
            console.log(`Dowloaded and saved ${body.length} bytes to ${args[1]}`);
        })
    })

    //let write2file = fs.writeFile(args[1], (err, data) =)
//}


//console.log(args);


/* 
fs.readFile(body, (err, data) => {
    //console.log(body)
    fs.writeFile(args[1], data, (err) =>{
        if (err) throw err;
        console.log('The file has been saved!');
    });
}) 
*/




