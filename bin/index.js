#! /usr/bin/env node

const { error } = require('node:console')
const { mkdir, writeFileSync, copyFileSync, existsSync } = require('node:fs')
const path = require('path');

const sourcePath = path.resolve(__dirname, 'data/');

mkdir("./models", { recursive: true }, (error) => {
    if (error) {
        console.log(error.message)
    }
})
mkdir("./controllers", { recursive: true }, (error) => {
    if (error) {
        console.log(error.message)
    }
})
mkdir("./routes", { recursive: true }, (error) => {
    if (error) {
        console.log(error.message)
    }
})
mkdir("./middlewares", { recursive: true }, (error) => {
    if (error) {
        console.log(error.message)
    }
})
mkdir("./config", { recursive: true }, (error) => {
    if (error) {
        console.log(error.message)
    }
})

writeFileSync("./config/db.js", "//Your database configuration goes here")
copyFileSync(`${sourcePath}/app.txt`, "./App.js")
copyFileSync(`${sourcePath}/gitignore.txt`, "./.gitignore")
copyFileSync(`${sourcePath}/package.txt`, "./package.json")
copyFileSync(`${sourcePath}/dotenv.txt`, "./config/.env")
writeFileSync("./controllers/index.js", "//This file is for exporting your controllers only\n //import the here and then export theme! \n\n module.exports = {}")

console.log('Now installa dependencies by runing :');
console.log('\x1b[36m%s\x1b[0m', 'npm install');
