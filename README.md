# filesize-cli

Say you've decided your diet includes too much gulp or grunt and want to eat something more natural like npm scripts, but miss tasty deserts like grunt-file
size?

This is just a tiny module that returns a file's size. It's made as a CLI to use with npm scripts.

### Install

`npm install filesize-cli`

### Use

```
filesize-cli src/finalBuild.js

// finalBuild.js: 3892 kb

filesize-cli src/

// helperFile.js: 378 kb
// fixBrowserBug.txt: 836 kb
// doghighfivescat.png 7287 kb
// setup.js: 389 kb
// finalBuild.js: 3892 kb
```