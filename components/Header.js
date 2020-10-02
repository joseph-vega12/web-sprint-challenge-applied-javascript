// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerContainer = document.querySelector(".header-container");

function Header() {
    const container = document.createElement("div");
    const spn = document.createElement("span");
    const title = document.createElement("h1");
    const spn2 = document.createElement("span");

    container.classList.add("header");
    spn.classList.add("date");
    spn2.classList.add("temp");

    spn.textContent = "MARCH 28, 2020";
    title.textContent = "Lambda Times";
    spn2.textContent = "98°";

    headerContainer.appendChild(container); 
    container.appendChild(spn);
    container.appendChild(title);
    container.appendChild(spn2);

    return container;
}

console.log(Header());
