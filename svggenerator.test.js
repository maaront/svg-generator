// Import the generateSVG function from the main file
const { generateSVG } = require('./index');

// Describe the test suite for the generateSVG function
describe('generateSVG', () => {
  
  // Test if the function generates a circle SVG
  it('should generate a circle SVG', () => {
    // Define input parameters for the test
    const input = {
      text: 'ABC',
      textcolor: 'black',
      shape: 'circle',
      shapecolor: 'red',
    };
    // Call the generateSVG function with the input parameters
    const output = generateSVG(input);
    // Check if the generated SVG string contains the correct circle element
    expect(output).toContain('<circle cx="150" cy="100" r="75" fill="red" />');
  });

  // Test if the function generates a triangle SVG
  it('should generate a triangle SVG', () => {
    // Define input parameters for the test
    const input = {
      text: 'DEF',
      textcolor: 'white',
      shape: 'triangle',
      shapecolor: 'blue',
    };
    // Call the generateSVG function with the input parameters
    const output = generateSVG(input);
    // Check if the generated SVG string contains the correct triangle element
    expect(output).toContain('<polygon points="100,20 200,200 20,200" fill="blue" />');
  });

  // Test if the function generates a square SVG
  it('should generate a square SVG', () => {
    // Define input parameters for the test
    const input = {
      text: 'GHI',
      textcolor: 'green',
      shape: 'square',
      shapecolor: 'yellow',
    };
    // Call the generateSVG function with the input parameters
    const output = generateSVG(input);
    // Check if the generated SVG string contains the correct square element
    expect(output).toContain('<rect x="30" y="30" width="240" height="140" fill="yellow" />');
  });

  // Test if the function includes the provided text in the SVG
  it('should include the provided text', () => {
    // Define input parameters for the test
    const input = {
      text: 'XYZ',
      textcolor: 'blue',
      shape: 'circle',
      shapecolor: 'purple',
    };
    // Call the generateSVG function with the input parameters
    const output = generateSVG(input);
    // Check if the generated SVG string contains the correct text element with the provided text
    expect(output).toContain('<text x="150" y="110" font-size="50" text-anchor="middle" fill="blue">XYZ</text>');
  });
});
