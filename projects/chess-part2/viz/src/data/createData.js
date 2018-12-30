const { writeFile } = require('fs')
const { promisify } = require('util')
const data = require('./data')
const writeFileAsync = promisify(writeFile)

async function main() {
  await writeFileAsync('./data.json', JSON.stringify(data))
}

main()
