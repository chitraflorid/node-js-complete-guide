//  first-app.js

// Section 1: Lecture 3

// This very simple app displays a variant of the "Hello World!" cliche.
// However, in this variant, rather than logging to the terminal console,
// the text is written to a file.

// Robert Hieger
// August 3, 2019

// Import required dependencies:

const fs = require('fs');   // file system support

//  Create a new file:

// arguments:
// 1. File path including file name
// 2. Content to be written to file. NOTE: Can also be a variablee containing
//    the content you wish to be written to the file.

// fs.writeFileSync('hello.txt', 'Hello from Node.js!\n');

const fileContent = `Ich sage es gibt keinen anfang. Und wir zittern nicht.
Wir sind nicht sentimental. Wir zerreissen das Leinen
aus Volken und Gebeten wie einen wütenden Wind, und
berreiten das grossen Schauspiel des Disasters, des
Feuers und der zergliederung vor.\n`;

fs.writeFileSync('hello.txt', fileContent);
