const program = require('commander')
const {version} = require('./util')
const {mapCommand} = require('./cmd/options.js')
const path = require('path')

/* Object.entries(mapCommand).forEach(([action, cmd]) => {
    program.command(action).alias(cmd.alias).description(cmd.description).allowUnknownOption()
    .action(() => {
        if(action === "*") {
            console.log(cmd.description)
        } else {
            console.log('program.name', program.name(), process.argv)
            require(path.join(__dirname, 'cmd', action))([...process.argv.slice(3)])
        }
    })
})

program.on('--help', () => {
    console.log('\nExamples');
    Object.entries(mapCommand).forEach(([action, cmd]) => {
        cmd.examples.forEach(_ => {
            console.log(_)
        })
    })
})

program.version(version)
       .parse(process.argv); */

program.command("init").alias("i").description("初始化...")
.option('-f, --float <number>', 'float')
.allowUnknownOption()
.parse(process.argv);

const {float} = program

console.log('float: ' + float)