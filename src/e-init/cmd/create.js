const path = require('path')
const download = require('download-git-repo')
const ora = require('ora')

const spinner = ora({
    text: '\ndownloading template, please wait...', // downloading template, please wait...
    spinner: {
        interval: 260,
        frames: [".", "...", "....", ".....", "......"]
    }
})

module.exports = (projectName) => {
    /* console.log(`此处是文件 ${projectName.join()}`)
    console.log(`process.cwd: ${process.cwd()}`)
    console.log(`__dirname: ${__dirname}`)
    console.log(`__filename: ${__filename}`)
    console.log(`path.resolve: ${path.resolve('./')}`) */
    spinner.start()
    download('github:roaiKim/react-ro', path.join(process.cwd(), projectName[0]), (error) => {
        if (error) {
            console.error('拉取仓库错误')
            spinner.stop();
            process.exit(-1)
        }
        spinner.stop();
        console.log('成功!')
    })
}
