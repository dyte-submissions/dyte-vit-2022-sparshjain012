const fs = require('fs');
const compare  = require('./compare_version');
//const search  = require('./repo');
module.exports = {
  getfiledetails:(filename,dependency_name,version) => { 
      
      let csv= require('fast-csv');
      var stream = fs.createReadStream(filename);
      //console.log(dependency_name);
      csv.parseStream(stream, {headers : true}).on("data", function(data){
        //console.log('Data:', data);
        var App_name=data.name;
        var GitHub_Link=data.link;
       //   console.log("App Name:",App_name);
       // console.log("Git-Hub Link:",GitHub_Link);

          //to Fetch the package.json file of a github link
          const getPackage = require('get-repo-package-json')
          getPackage(GitHub_Link).then(pkg => { 
          // var myData = []; 
          //console.log(pkg.name);
          //console.log(pkg.dependencies) 
          //myData.push(pkg.dependencies);
          // console.log(myData[0]);
       const answer=compare.version_compare(pkg.dependencies,dependency_name,version);   
       //const answer = search.askGithubCredentials(pkg.dependencies,dependency_name,version);
      })                
 })
 .on("end", function(){
     console.log("End OF File !");
 })
 }};
