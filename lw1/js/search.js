let resultSearchRow;

onload = function () {
  resultSearchRow = document.createElement("div");
  resultSearchRow.classList.add("row");
  resultSearchRow.classList.add("columns");
  resultSearchRow.classList.add("is-multiline");
  resultSearchRow.classList.add("search-result");
  document.getElementsByClassName("container")[0].getElementsByClassName("section")[0].appendChild(resultSearchRow);
}

function Search() {
  let input = document.getElementById("search-field");
  if (input.value.replace(/\s/g, "").length) {
    let filter = input.value.toLowerCase();
    let rows = document.getElementsByClassName("row");
    let nodes = document.getElementsByClassName("column is-one-third");

    while (resultSearchRow.firstChild) {
      resultSearchRow.removeChild(resultSearchRow.firstChild);
    }

    for (let i = 0; i < rows.length; i++) {
      rows[i].style.display = "none";
    }

    let nLength = nodes.length;
    for (let i = 0; i < nLength; i++) {
      if (nodes[i].innerText.toLowerCase().includes(filter)) {
        resultSearchRow.appendChild(nodes[i].cloneNode(true));
      }
    }
    resultSearchRow.style.display = "flex";
  }
}