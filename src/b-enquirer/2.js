const { Confirm, Input, MultiSelect, Select } = require('enquirer')

/* const prompt = new Confirm({
  name: 'question',
  message: 'Did you like enquirer?'
}); */

/* const prompt = new Input({
  name: 'username',
  message: 'what is your username'
}) */

/* const prompt = new MultiSelect({
  name: 'value',
  message: 'Pick your favorite colors',
  limit: 0,
  choices: [
    { name: 'aqua', value: '#00ffff' },
    { name: 'black', value: '#000000' },
    { name: 'blue', value: '#0000ff' },
    { name: 'fuchsia', value: '#ff00ff' },
    { name: 'gray', value: '#808080' },
    { name: 'green', value: '#008000' },
  ]
}) */

const prompt = new Select({
  name: 'color',
  message: 'Pick a flavor',
  choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
});

prompt.run().then(answer => console.log('Answer: ', answer))