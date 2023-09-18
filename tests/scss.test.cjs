const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

const sassTestFiles = glob.sync(path.join(__dirname, '*.test.scss'));

sassTestFiles.forEach((file) => {
  sassTrue.runSass({ describe, it }, file, { loadPaths: ['node_modules'] });
});
