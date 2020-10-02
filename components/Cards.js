import axios from "axios"

axios.get("https://lambda-times-api.herokuapp.com/articles")

    .then(res => {
        console.log(res.data);
        const data = res.data;
        cardContainer.append(createCard(data));
    })
    .catch(err => {
        console.log(err);
    })
// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//      <div class="author">
//          <div class="img-container">
//              <img src={url of authors image} />
//          </div>
//               <span>By {author's name}</span>
//          </div>
//   </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardContainer = document.querySelector(".cards-container");
// console.log(cardContainer);

function createCard(obj) {

    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");

    //outside div
    const spanAuthorName = document.createElement("span");



    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    card.appendChild(spanAuthorName);


    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    const javascriptButton = document.querySelector(".tab:nth-of-type(1)");
    const bootstrapButton = document.querySelector(".tab:nth-of-type(2)");
    const technologyButton = document.querySelector(".tab:nth-of-type(3)");
    const jqueryButton = document.querySelector(".tab:nth-of-type(4)");
    const nodeJsButton = document.querySelector(".tab:nth-of-type(5)");

    javascriptButton.addEventListener('click', function (event) {
        javascriptButton.classList.toggle('.tab');
        obj.articles.javascript.forEach(item => {
            headline.textContent = item.headline;
            img.src = item.authorPhoto;
            spanAuthorName.textContent = item.authorName;
        });
    });

    bootstrapButton.addEventListener('click', function (event) {
        bootstrapButton.classList.toggle('.tab');

        obj.articles.bootstrap.forEach(item => {
            headline.textContent = item.headline;
            img.src = item.authorPhoto;
            spanAuthorName.textContent = item.authorName;
        }); 
    });

    technologyButton.addEventListener('click', function (event) {
        technologyButton.classList.toggle('.tab');

        obj.articles.technology.forEach(item => {
            headline.textContent = item.headline;
            img.src = item.authorPhoto;
            spanAuthorName.textContent = item.authorName;
        });
    });

    jqueryButton.addEventListener('click', function (event) {
        jqueryButton.classList.toggle('.tab');

        obj.articles.jquery.forEach(item => {
            headline.textContent = item.headline;
            img.src = item.authorPhoto;
            spanAuthorName.textContent = item.authorName;
        });
    });

    nodeJsButton.addEventListener('click', function(event) {
        nodeJsButton.classList.toggle('.tab');

        obj.articles.node.forEach(item => {
            headline.textContent = item.headline;
            img.src = item.authorPhoto;
            spanAuthorName.textContent = item.authorName;
        });
    });

    // console.log(obj.javascript, "this is the object")

    return card;
}
// console.log(createCard());