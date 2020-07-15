const path = require('path')
const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const spinner = ora('downloading template, please wait...')

module.exports = (projectName) => {
    /* console.log(`此处是文件 ${projectName.join()}`)
    console.log(`process.cwd: ${process.cwd()}`)
    console.log(`__dirname: ${__dirname}`)
    console.log(`__filename: ${__filename}`)
    console.log(`path.resolve: ${path.resolve('./')}`) */

    console.log('projectName-->', projectName)
    if (!projectName[0]) {
        console.log(chalk.red('ro create 的第一个参数为必填项 \nro create <dir-name> [options]'))
        process.exit(-1);
    }
    if (projectName[0].startsWith("--")) {
        console.log(chalk.red('ro create 的第一个参数为文件夹名字, 不是参数 \nro create <dir-name> [options]'))
        process.exit(-1);
    }
    const dirName = projectName[0];
    projectName.shift()
    const optObj = projectName.map(_ => _.startsWith("--") ? _ + "#" : _)
    .join(",")
    .split(/--/g)
    .slice(1).
    filter(_ => _)
    .reduce((a, b) => (a[b.split('#')[0]] = (b.split('#')[1].split(",").filter(_ => _).join(",")), a), {})

    console.log('optObj-->', optObj)
    
    // spinner.start()

    /* download('github:roaiKim/react-ro', path.join(process.cwd(), projectName[0]), (error) => {
        if (error) {
            console.error('拉取仓库错误')
            spinner.stop();
            process.exit(-1)
        }
        spinner.stop();
        console.log('成功!')
    }) */
}
