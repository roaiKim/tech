/* const program = require('commander');

program.option('-C, --cheese <type>', 'add the specified', 'blue')

program.parse(process.arch);

console.log('cheese: ' + program.cheese) */

/* const program = require('commander');

program
  .option('--no-sauce', 'Remove sauce')
  .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
  .option('--no-cheese', 'plain with no cheese')
  .option('--config <config>', 'plain with no cheese')
  .parse(process.argv);

const sauceStr = program.sauce ? 'sauce' : 'no sauce';
const cheeseStr = (program.cheese === false) ? 'no cheese' : `${program.cheese} cheese`;
const config = program.config;
console.log(`You ordered a pizza with ${sauceStr} and ${cheeseStr} and ${config}`);
 */

const program = require('commander');
const { prompt } = require('enquirer')

program
  .option('-f, --float <number>', 'float')
  .parse(process.argv);

const {float} = program;



prompt({
    type: 'confirm',
    name: 'question',
    message: 'Did you like enquirer'
}).then(answer => console.log('Answer: ', answer))

console.log(`you float is ${float}`);
