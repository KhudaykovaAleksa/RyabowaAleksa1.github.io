
// text (Lorem)
let tableContent = "Lorem ipsum dolor sit amet.";

// table row and cell
let tableRow = 3;
let tableCell = 3;

// const (end not need)
let table = '<table class="table">';
let caption = '<caption>';
let thead = '<thead class="table-header">';
let tr = '<tr class="table-row">';
let th = '<th class="table-data">';
let td = '<td class="table-data">';
let tbody = '<tbody class="table-body">';
let tfoot = '<tfoot class="table-footer">';

// table array (html)
let tableArr=[];
// create table 
tableArr.push(table);
// create caption
tableArr.push(caption+"Сгенерированная таблица");
// create thread
tableArr.push(thead);
for (let i = 0; i < tableRow; i++) {
    tableArr.push(tr+(th+tableContent).repeat(tableCell));
}
// create tbody
tableArr.push(tbody);
for (let i = 0; i < tableRow; i++) {
    tableArr.push(tr+(td+tableContent).repeat(tableCell));
}
// create tfoot
tableArr.push(tfoot);
for (let i = 0; i < tableRow; i++) {
    tableArr.push(tr+(td+tableContent).repeat(tableCell));
}

document.getElementById('tableContainer').innerHTML=tableArr.join('\n');