/* Creates navbar template */
let headerInfo = `
<header>
<div>
  <ul class="nav-links">
    <li><a href="../src/index.html">About</a></li>
    <li><a href="../src/cv.html">Curriculum Vitae</a></li>
  </ul>
</div>
</header>
`

/* Adds headerInfo infromation to header, and adds to each page via script
by inserting using .innerHTML */
const body = document.getElementsByTagName("BODY")[0];
const header = document.createElement("header");
header.id = "header";
const headerItem = (header.innerHTML += headerInfo);
body.insertBefore(header, body.firstChild);