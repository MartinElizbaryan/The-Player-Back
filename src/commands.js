import yargs from "yargs"
import commands from "../_c/_index.js"


const argv = yargs(process.argv.slice(2)).argv
const {_: commandNames, $0: fileName, ...rest} = argv

commandNames.forEach(name => {
    commands[name](rest)
});

// console.log(commandNames, fileName, rest)

