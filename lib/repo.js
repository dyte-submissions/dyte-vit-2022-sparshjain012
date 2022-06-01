const compare  = require('./compare_version');
module.exports = {
  askGithubCredentials: (dependencies,dependency_name,version) => {
    var current_version_used=dependencies.axios;
   // console.log("dependency name=",dependency_name);
    const answer_boolean = compare.version_compare(current_version_used,version);
    //  console.log("Delayed for 1 second.");
    //console.log("Version in git=",current_version_used);
    //console.log("Latest-Version=",version);
  }
};