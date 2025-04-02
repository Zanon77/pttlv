// script.js
// Function to load and parse the XML file
function loadXMLDoc(filename) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", filename, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            displayXML(xhr.responseXML);  // Pass XML response to display function
        }
    };
    xhr.send();
}

// Function to display the XML content in the table
function displayXML(xml) {
    var table = document.getElementById("bookTable").getElementsByTagName('tbody')[0];
    var books = xml.getElementsByTagName("book");

    // Loop through each book and display it in a row
    for (var i = 0; i < books.length; i++) {
        var title = books[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        var author = books[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
        var year = books[i].getElementsByTagName("year")[0].childNodes[0].nodeValue;

        // Create a new row and populate it with the data
        var row = table.insertRow();
        row.insertCell(0).textContent = title;
        row.insertCell(1).textContent = author;
        row.insertCell(2).textContent = year;
    }
}

// Load the XML file when the page is loaded
window.onload = function() {
    loadXMLDoc("data.xml"); // Path to your XML file
};
