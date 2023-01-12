console.log(`works?`);

const inputRows = document.querySelector(`#rows-input`);
const inputColums = document.querySelector(`#colums-input`);
const tableElement = document.querySelector(`#table-element`);

const createTable = () => {
  for (let r = 0; r < inputRows.value; r++) {
    const tr = document.createElement(`tr`);
    const print = document.createTextNode(`Row ` + (r + 1));

    for (let c = 0; c < inputColums.value; c++) {
      const td = document.createElement(`td`);
      const print = document.createTextNode(`Column: ${c + 1} Row: ${r + 1}`);

      td.appendChild(print);
      tr.appendChild(td);
    }
    tableElement.appendChild(tr);
  }
};

const createBtn = document
  .querySelector(`#create`)
  .addEventListener(`click`, createTable);
