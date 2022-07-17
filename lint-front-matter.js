const fs = require('fs');

const fm = require('front-matter');
const glob = require('glob');

const files = glob.sync('./dists/**/*.md');

for (const file of files) {
  try {
    fm(fs.readFileSync(file, 'utf8'));
  } catch(e) {
    console.log(file);
  }
}
