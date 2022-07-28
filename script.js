const DEFAULT_COLS = 16;
const DEFAULT_ROWS = 16;
let USER_INPUT_COLS = null;
let USER_INPUT_ROWS = null;
let cols = USER_INPUT_COLS || DEFAULT_COLS;
let rows = USER_INPUT_ROWS || DEFAULT_ROWS;

const drawSpace = document.getElementById('screen');
const drawingAreaWidth = 960;
drawSpace.style.width = `${drawingAreaWidth}px`;

function generateDrawingArea() {
  drawSpace.style.height = '74vh';
  drawSpace.style.backgroundColor = 'turquoise';
};

generateDrawingArea();

function getUserInputCols() {
  console.log(document.querySelector('input[name="gridcols"]').value);
  if (document.querySelector(`input[name="gridcols"]`).value === '') {
    return;
  } else if (document.querySelector(`input[name="gridcols"]`).value <= 300) {
    cols = document.querySelector('input[name="gridcols"]').value;
  }
  return;
};

// shows error popup when user input is too high
function inputError() {
  const errorMsg = document.createElement('div');
  document.querySelector('#screen').appendChild(errorMsg);
  errorMsg.classList.add('error')
}

function getUserInputRows() {
  console.log(document.querySelector('input[name="gridrows"]').value);
  if (document.querySelector(`input[name="gridrows"]`).value === '') {
    return;
  } else if (document.querySelector(`input[name="gridrows"]`).value <= 300) {
    rows = document.querySelector('input[name="gridrows"]').value;
  }
  return;
};

function createCells() {
  getUserInputCols();
  getUserInputRows();
  const NUM_CELLS = cols * rows;
  for (let i = 0; i < NUM_CELLS; i++) {
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.setAttribute('id', `cell-${i+1}`);
    newCell.style.width = `${drawingAreaWidth / cols}px`;
    drawSpace.appendChild(newCell);
  }
};

const playButton = document.getElementById('start-play');
const clearButton = document.getElementById('clear');
const resetButton = document.getElementById('reset');

playButton.addEventListener('click', () => {
  getUserInputCols();
  getUserInputRows();
  createCells();
  document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('mouseover', () => {
      document.getElementById(cell.id).classList.add('toggle');
    });
  });
  playButton.setAttribute('disabled', '');
  playButton.classList.add('disabled');
});

clearButton.addEventListener('click', () => {
  document.querySelectorAll('.cell').forEach(cell => {
    cell.classList.remove('toggle');
  });
});

resetButton.addEventListener('click', () => {
  while (drawSpace.firstChild) {
    drawSpace.removeChild(drawSpace.lastChild);
  }
  playButton.disabled = false;
  playButton.classList.remove('disabled');
  document.querySelectorAll('.cell').forEach(cell => {
    cell.classList.remove('toggle');
  });
});