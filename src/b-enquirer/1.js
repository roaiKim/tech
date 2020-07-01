const { prompt } = require('enquirer')

/* async function enq () {
  const response = await prompt([{
    type: 'input',
    name: 'username',
    message: '你的名字'
  }, {
    type: 'input',
    name: 'age',
    message: '你的年龄'
  }])
  console.log(response)
}


enq() */

prompt({
    type: 'confirm',
    name: 'question',
    message: 'Did you like enquirer'
}).then(answer => console.log('Answer: ', answer))
