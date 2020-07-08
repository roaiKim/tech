const program = require('commander');

program.command('init').description("生成一个文件库").alias('i').action(() => {require('./cmd/init')})

program.parse(process.argv)