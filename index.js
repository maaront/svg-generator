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
  const generateSVG = (
  {
    text,
    textcolor,
    shape,
    shapecolor,
    });
      return `
<svg version="1.1"
width="300" height="300"
xmlns="http://www.w3.org/2000/svg">
 
<${shape} cx="80" cy="80" r="80" fill="${shapecolor}" />

<text x="80" y="100" font-size="60" text-anchor="middle" fill="${textcolor}">SVG</text>
 
 </svg>
  
  ## License
  ${license}
  `
  };
  


])
.then((answers) => {
  // Generate the README content based on the user's answers
  const readMEContent = generateREADME(answers, answers.hasScreenshot, answers.screenshot);

  // Write the README content to a file
  fs.writeFile('README.md', readMEContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully created README.md!');

      // Prompt the user if they want to open the README.md file
      inquirer
        .prompt([
          {
            type: 'confirm',
            message: 'Do you want to open the README.md file?',
            name: 'openFile',
          },
        ])
        .then((answer) => {
          // Open the README.md file if the user selects 'Yes'
          if (answer.openFile) {
            openFile('README.md');
          } else {
            console.log('File not opened.');
          }
        });
    }
  });
});

// Generate README.md from user responses
const generateREADME = (
{
title,
description,
install,
usage,
contribution,
testing,
license,
username,
email,
},
hasScreenshot,
screenshot
) => {
const screenshotSection = hasScreenshot ? `\n## Screenshot\n\n![Screenshot](${screenshot})\n` : '';
  return `


# ${title}
`
};
