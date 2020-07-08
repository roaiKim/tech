#!/usr/bin/env node

const program = require('commander')

program.command('init').description('初始化项目').alias('i').action(() => {
    console.log('--op-->')
})
console.log('--op-->')