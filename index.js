const { execSync } = require('child_process');

const url = execSync('git config --get remote.origin.url' , { encoding: 'utf8' });
console.log(url);