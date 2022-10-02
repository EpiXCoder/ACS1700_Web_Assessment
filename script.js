// Defining variables
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const colorInput = document.getElementById("color");

const widthOutput = document.getElementById("width_output");
const heightOutput = document.getElementById("height_output");
const colorOutput = document.getElementById("color_output");

const colorBlock = document.getElementById("block");

const inputQuad = document.getElementById("input-q2");

// Assigning default values or display values
// Quadrant - 2 
widthInput.value = 100;
heightInput.value = 50;
colorInput.value = '#E6B400';

// Quadrant - 3 
widthOutput.innerHTML = `${widthInput.value}px`;
heightOutput.innerHTML = `${heightInput.value}px`;
colorOutput.innerHTML = `${colorInput.value.toUpperCase()}`;

// Quadrant - 4
colorBlock.style.width = `${widthInput.value}px`;
colorBlock.style.height = `${heightInput.value}px`;
colorBlock.style.backgroundColor = colorInput.value;
colorBlock.style.border = '#000000 1px solid';



// Event listener based on input value change
inputQuad.onchange = function (e) {
    const outputDisplay = document.getElementById(`${e.target.id}_output`);
    outputDisplay.innerHTML = `${e.target.value}px`;

    if (e.target.id === "color") {
        colorBlock.style.backgroundColor = e.target.value;
    } else {
        colorBlock.style[e.target.id] = `${e.target.value}`;
    }
};
