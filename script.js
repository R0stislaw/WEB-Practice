function performSearch() {
  var query = document.getElementById("searchInput").value.toLowerCase();
  var elements = document.getElementsByTagName("p");
  var results = [];
  for (var i = 0; i < elements.length; i++) {
    var elementText = elements[i].textContent.toLowerCase();
    if (elementText.includes(query)) {
      results.push(elements[i]);
    }
  }
  var searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";
  if (results.length > 0) {
    for (var j = 0; j < results.length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = results[j].textContent;
      searchResults.appendChild(listItem);
    }
  } else {
    var noResultsItem = document.createElement("li");
    noResultsItem.textContent = "Нічого не знайдено";
    searchResults.appendChild(noResultsItem);
  }
}
var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", performSearch);