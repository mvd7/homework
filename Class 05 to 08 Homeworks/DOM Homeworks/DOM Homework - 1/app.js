console.log(`working script`);

let firstParagraph = document.querySelector(`.paragraph`);
let secondParagraph = document.querySelector(`.second-div p`);
let mainHeader = document.querySelector(`#mainHeading`);
let noClassH3 = document.querySelector(`h3`);
let lastH1 = document.querySelectorAll(`div h1`);

firstParagraph.innerText = `Changed text content in javascript.`;

secondParagraph.innerText = `Changed content.`;

mainHeader.innerText = `This is the new header from JS`;

noClassH3.innerText = `This is H3 without class`;

lastH1[0].innerHTML = `H1 without class`;
