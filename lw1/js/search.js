function Search() {
    var input = document.getElementById("search-field");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName("column is-one-third");

    for (var i = 0; i < nodes.length; i++) {
        if (!nodes[i].innerText.toLowerCase().includes(filter))
            nodes[i].style.display = "none";
    }
}