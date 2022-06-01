const inquirer = require('inquirer');
const files = require('./files');

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: 'FileName',
        type: 'input',
        message: 'Enter your FileName with csv fomrat having git links:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the file name in csv format.';
          }
        }
      },
      {
        name: 'Dependencyname',
        type: 'input',
        message: 'Enter the dependency name:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the dependency name.';
          }
        }
      },
      {
        name: 'Versionname',
        type: 'input',
        message: 'Enter the Version:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the Version name.';
          }
        }
      }
    ];

    
    return inquirer.prompt(questions);
  }
};
