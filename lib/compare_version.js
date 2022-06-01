//const print  = require('./output');
module.exports = {
  version_compare: (dependencies,dependency_name,version) => {
    var current_version=dependencies.axios;
    const v1 = current_version.split('.');
    const v2 = version.split('.');
    var answer;
    console.log("Version in git=",current_version);
    console.log("Latest-Version=",version);
    // take the longest array and loop that many times 
    // need to check last number is prev numbers were the same
    const length = Math.max(v1.length, v2.length);
    for (let i = 0; i <= length; i += 1) { 
      //answer=true;
      //loop max amount of times
        // if undefined set to 0, parse to number to compare
        const value1 = v1[i] ? +v1[i] : 0;
        const value2 = v2[i] ? +v2[i] : 0;
        if (value1 < value2) {
            console.log("False");
            
           var exec = require('child_process').exec;
var child;

child = exec('create-pull-request',
   function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('exec error: ' + error);
      }
   });
          //answer="True" ;
        } 
        else if (value1 > value2) {
          console.log("True");  
          //answer="False";
        }
        }
 //       const setoutput=print.set_output(current_version,version,answer);
  }
};
