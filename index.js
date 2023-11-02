#!/usr/bin/env node
const program = require('commander');


program
  .version('1.0.0')
  .description('Client management System');

program
  .command('add <firstname> <lastname>')
  .alias('a')
  .description('Add a customer')
  .action((firstname, lastname) => {
    console.log({firstname, lastname});
  })

program.parse(process.argv)
