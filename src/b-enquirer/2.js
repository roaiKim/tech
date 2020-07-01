const { Confirm, Input } = require('enquirer')

/* const prompt = new Confirm({
  name: 'question',
  message: 'Did you like enquirer?'
}); */

const prompt = new Input({
  name: 'username',
  message: 'what is your username'
})

prompt.run().then(answer => console.log('Answer: ', answer))