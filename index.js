#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

var fs = require('fs');
var express = require('express');
var app = express();

const files = require('./lib/files');
const github = require('./lib/compare_version');
const repo = require('./lib/repo');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Dyte Submission', { horizontalLayout: 'full' })
  )
);


const inquirer  = require('./lib/inquirer');
const filedata =require('./lib/files');
const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  //read csv file name from user
  //console.log(credentials.FileName);
  var check_dependency_name=credentials.Dependencyname;
  var Version=credentials.Versionname;
  //read csv file
  const filedetails=await filedata.getfiledetails(credentials.FileName,check_dependency_name,Version);
  //console.log(credentials.Dependencyname);
};
run();
