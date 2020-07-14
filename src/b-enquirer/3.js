const Enquirer = require('enquirer')

const enquirer = new Enquirer();
const plugin = enquirer => {
  console.log(enquirer)
}

enquirer.use(plugin)