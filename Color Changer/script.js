let RandomBtn = document.querySelector('.RandomBtn');
let colorInput = document.querySelector('#colorInput');
let ApplyBtn = document.querySelector('.ApplyBtn');
let currentColorValue = document.querySelector('.currentColorValue');
let container = document.querySelector('.container');

const colorArray = [
  "#fcd5ce",
  "#fae1dd",
  "#f8edeb",
  "#d8e2dc",
  "#ece4db",
  "#ffe5ec",
  "#dee2ff",
  "#cdb4db",
  "#b5ead7",
  "#ffd6a5",
  "#fdffb6",
  "#a0c4ff",
  "#9bf6ff",
  "#ffadad",
  "#e2ece9"
];


const changeColor = (color) => {
    container.style.background = color;
    currentColorValue.textContent = color;
};

const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomIndex];
};

const handleRandomBtnClick = () => {
    const color = generateRandomColor();
    changeColor(color);
};

const handleApplyBtnClick = () => {
    const color = colorInput.value.trim();
    changeColor(color);
};

RandomBtn.addEventListener('click', handleRandomBtnClick);
ApplyBtn.addEventListener('click', handleApplyBtnClick);
