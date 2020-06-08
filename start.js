// // import express JS module into app 
// // and creates its variable. 
// var express = require('express'); 
// var app = express(); 
  
// // Creates a server which runs on port 3000 and  
// // can be accessed through localhost:3000 
// app.listen(3000, function() { 
//     console.log('server running on port 3000'); 
// } ) 
  
// // Function callName() is executed whenever  
// // url is of the form localhost:3000/name 
// app.get('/', callName); 
  
// function callName(req, res) { 
      
//     // Use child_process.spawn method from  
//     // child_process module and assign it 
//     // to variable spawn 
//     var spawn = require("child_process").spawn; 
      
//     // Parameters passed in spawn - 
//     // 1. type_of_script 
//     // 2. list containing Path of the script 
//     //    and arguments for the script  
      
//     // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
//     // so, first name = Mike and last name = Will
//     //http://localhost:3000
//     var process = spawn('/Users/alexandrmoshisnky/Desktop/HERO/venv/bin/python3.8',["/Users/alexandrmoshisnky/Desktop/HERO/mainSpine.py"]); 

//     // Takes stdout data from script which executed 
//     // with arguments and send this data to res object 
//     process.stdout.on('data', function(data) { 
//         console.log(data.toString());
//         res.send(data.toString());
//     } ) 
// } 

var express = require('express'); 
var app = express(); 
let {PythonShell} = require('python-shell');


app.listen(2000, function() { 
    console.log('server running on port 2000'); 
} ) 

app.get('/', callName); 
  
function callName(req, res) { 

    let options = {
    mode: 'text',
    pythonPath: '/Users/alexandrmoshisnky/Desktop/HERO/venv/bin/python3.8',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '/Users/alexandrmoshisnky/Desktop/HERO/',
    };

    PythonShell.run('mainSpine.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    json = {};
    results = results[0];                   // ["['1','2']"] => "['1','2']"
    results = results.replace(/'/g, '"');   // "['1','2']" => '["1","2"]'
    json['line'] = JSON.parse(results);     // '["1","2"]' => ["1","2"]
                                            // {... , 'line' : ["1","2"], ...}
    console.log('results:', json); 
    res.send(json);
    });
}