const mapCommand = {
    create: {
        alias: 'c',
        description: '创建一个项目',
        examples: ['ro create <project-name>']
    },
    config: {
        alias: 'conf',
        description: '配置一个配置文件',
        examples: ['ro config set <k><v>', 'ro config get <K>']
    },
    '*': {
        alias: '',
        description: '命令未找到',
        examples: []
    }
}

module.exports = {
    mapCommand
}
