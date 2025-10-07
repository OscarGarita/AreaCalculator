
const btnAdd = document.getElementById('addButton');
btnAdd.addEventListener('click', addData);

const btnClean = document.getElementById('btnClean');
btnClean.addEventListener('click', cleanTable);



function addData() {
    
    var nameInput = document.getElementById('txtName');
    var lengthInput = document.getElementById('txtLength');
    var widthInput = document.getElementById('txtWidth');

    var txtName = nameInput.value;
    var txtLength = parseFloat(lengthInput.value);
    var txtWidth = parseFloat(widthInput.value);

    let valid = true;

    // Validación y borde rojo
    if (!txtName) {
        nameInput.style.border = '2px solid red';
        valid = false;
    } else {
        nameInput.style.border = '';
    }

    if (!lengthInput.value || isNaN(txtLength)) {
        lengthInput.style.border = '2px solid red';
        valid = false;
    } else {
        lengthInput.style.border = '';
    }

    if (!widthInput.value || isNaN(txtWidth)) {
        widthInput.style.border = '2px solid red';
        valid = false;
    } else {
        widthInput.style.border = '';
    }

    if (!valid) {
        alert('You must fill all the inputs');
        return;
    }

    var total = (txtLength * txtWidth).toFixed(2);
    var table = document.getElementById('table');

    var tableRow = document.createElement('tr');
    var area = document.createElement('td');
    var length = document.createElement('td');
    var width = document.createElement('td');
    var totalArea = document.createElement('td');
    var iconCell = document.createElement('td');

    var trashIcon = document.createElement('i');
    trashIcon.className = 'fa-solid fa-trash';
    trashIcon.style.cursor = 'pointer';

    // Evento para borrar la fila actual
    trashIcon.addEventListener('click', function () {
        tableRow.remove();
        updateTotal();
    });

    iconCell.appendChild(trashIcon);

    area.textContent = txtName;
    length.textContent = txtLength;
    width.textContent = txtWidth;
    totalArea.textContent = total;

    tableRow.appendChild(area);
    tableRow.appendChild(length);
    tableRow.appendChild(width);
    tableRow.appendChild(totalArea);
    tableRow.appendChild(iconCell);

    table.appendChild(tableRow);

    updateTotal();
    clean();
}



function clean() {
    txtName.value = '';
    txtLength.value = '';
    txtWidth.value = '';
}

function updateTotal() {

    const txtTotal = document.getElementById('totalArea');
    const table = document.getElementById('table');

    var total = 0;

    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];
        const cell = row.cells[3];

        if (cell && !isNaN(cell.textContent)) {
            total += parseFloat(cell.textContent)

        }

        txtTotal.textContent = total + 'm2';
    }
}
function cleanTable() {
    const txtTotal = document.getElementById('totalArea');
    const table = document.getElementById('table');

    while (table.rows.length > 0) {
        table.deleteRow(1);
    }

    txtTotal.textContent = '';
}



