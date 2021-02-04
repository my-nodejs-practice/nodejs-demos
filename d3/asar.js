const asar = require('asar');
const path = require('path');
const src = path.resolve(__dirname, '../d3');
const dest = path.resolve(__dirname, './d3.asar');

asar.createPackage(src, dest).then(() => {
  console.log('done.');
  asar.extractAll(dest, path.resolve(__dirname, './extract/'));
  console.log('extractAll done.');
});
