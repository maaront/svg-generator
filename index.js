// Import packages
const inquirer = require('inquirer');
const fs = require('fs');

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
        shapeElement = `<circle cx="80" cy="80" r="80" fill="${shapecolor}" />`;
        break;
      case 'triangle':
        // Set the shapeElement to triangle
        shapeElement = `
          <polygon points="80,10 150,150 10,150" fill="${shapecolor}" />
        `;
        break;
      case 'square':
        // Set the shapeElement to a rectangle
        shapeElement = `<rect x="10" y="10" width="140" height="140" fill="${shapecolor}" />`;
        break;
      default:
        // Throw an error if an invalid shape is selected
        throw new Error('Invalid shape selected.');
    }
  
    // Return the final SVG string with the shape and text elements
    return `
  <svg version="1.1"
  width="300" height="300"
  xmlns="http://www.w3.org/2000/svg">
   
  ${shapeElement} <!-- Insert the shape based on the user's choice -->
  
  <text x="80" y="100" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text> <!-- Insert the text SVG element with the user's input -->
   
  </svg>
  `;
  };