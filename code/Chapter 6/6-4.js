var fs = require('fs')

fs.writeFile('./message.txt', 'hello world!', err => {
  if (err) {
    console.log(err)
  } else {
    console.log('done')
  }
})