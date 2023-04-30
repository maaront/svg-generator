// Circle
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <circle r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>


// Import packages
const inquirer = require('inquirer');
const fs = require('fs');

// Import open package and define openFile function
async function openFile(filepath) {
  const open = (await import('open')).default;
  await open(filepath);
}

// Begin user prompts using inquirer
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Add up to three characters of text. Leave blank for no text.',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Add text color (keyword or hexadecimal). Leave blank for no text.',
      name: 'text-color',
    },
    {
      type: 'list',
      message: 'Choose a shape',
      name: 'shape',
      choices: [
        'circle',
        'triangle',
        'square',
      ],
    },
    {
        type: 'input',
        message: 'Add shape color (keyword or hexadecimal).',
        name: 'shape-color',
      },

