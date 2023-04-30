// Import packages
const inquirer = require('inquirer');
// Add functionality to limit input characters
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const fs = require('fs');

// Import open package and define openFile function
async function openFile(filepath) {
    const open = (await import('open')).default;
    await open(filepath, { url: true }); // Open file in default web browser
  }

// Begin user prompts using inquirer
inquirer
  .prompt([
    {
      type: 'maxlength-input',
      message: 'Add up to three characters of text. Leave blank for no text.',
      name: 'text',
      maxLength: 3,
    },
    {
      type: 'input',
      message: 'Add text color (keyword or hexadecimal). Leave blank for no text.',
      name: 'textcolor',
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
        name: 'shapecolor',
      },
    ])
    // Fulfill the promise
    .then((answers) => {
      // Generate the SVG content based on the user's answers
      const svgContent = generateSVG(answers);
  
      // Write the SVG content to a file
      fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Generated logo.svg');

          inquirer
          .prompt([
            {
              type: 'confirm',
              message: 'Do you want to open the SVG?',
              name: 'openFile',
            },
          ])
          .then((answer) => {
            // Open the logo.svg file if the user selects 'Yes'
            if (answer.openFile) {
              openFile('logo.svg').catch((err) => {
                console.error('Error opening the file:', err);
              });
            } else {
              console.log('File not opened.');
            }
          });
    }
    });
});
  
  // Generate logo.svg from user responses
  const generateSVG = ({
    text,
    textcolor,
    shape,
    shapecolor,
  }) => {
    // Declare a variable to store the shape SVG element
    let shapeElement;
  
    // Switch statement to handle different shape selections
    switch (shape) {
        case 'circle':
          // Set the shapeElement to circle
          shapeElement = `<circle cx="150" cy="100" r="75" fill="${shapecolor}" />`;
          break;
        case 'triangle':
          // Set the shapeElement to triangle
          shapeElement = `
            <polygon points="100,20 200,200 20,200" fill="${shapecolor}" />
          `;
          break;
        case 'square':
          // Set the shapeElement to a rectangle
          shapeElement = `<rect x="30" y="30" width="240" height="140" fill="${shapecolor}" />`;
          break;
      }
  
    // Return the final SVG string with the shape and text elements
    return `
  <svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
   
  ${shapeElement} <!-- Insert the shape based on the user's choice -->
  
  <text x="150" y="110" font-size="50" text-anchor="middle" fill="${textcolor}">${text}</text> <!-- Insert the text SVG element with the user's input -->
   
  </svg>
  `;
  };