const DEFAULT_SIZE = 16;
const drawSpace = document.getElementById('screen');

function createRows() {
  for (let i = 0; i < DEFAULT_SIZE; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('id', `row-${i+1}`)
    drawSpace.appendChild(row);
  }
}

function createCells() {
  for (let i = 0; i < DEFAULT_SIZE; i++) {
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    // cell.setAttribute('id', `cell-${i+1}`);
    document.querySelector(`#row-${i+1}`).appendChild(newCell);
  }
}

const playButton = document.getElementById('start-play');

playButton.addEventListener('click', () => {
  createRows();
  for (let i = 0; i < DEFAULT_SIZE; i++) {
    createCells();
  }
  document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('mouseover', () => {
      console.log(`i'm a cell event listener!`);
      console.log(cell);
      setColor();
    })
  })
});

function setColor() {
    document.querySelector('.cell').classList.add('toggle');
}

