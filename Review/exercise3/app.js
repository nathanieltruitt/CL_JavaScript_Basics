const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const submitButton = document.querySelector("#save-btn");
const table = document.querySelector("#data-table");
let savedTableData = localStorage.getItem("table") || "";

if (savedTableData) table.innerHTML = savedTableData;

function addTableEntry() {
  const tableData = `<td>${firstName.value}</td>
   <td>${lastName.value}</td>`;
  const rowElement = document.createElement("tr");
  rowElement.innerHTML = tableData;

  table.appendChild(rowElement);
  savedTableData = table.innerHTML;
  localStorage.setItem("table", savedTableData);
}

submitButton.addEventListener("click", addTableEntry);
