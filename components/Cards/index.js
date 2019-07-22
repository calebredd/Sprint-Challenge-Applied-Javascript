// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
//
// Create a card for each of the articles and add the card to the DOM.
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(data => {
    console.log(data.data.articles);
    const keys=Object.keys(data.data.articles);
    keys.forEach(topic =>
      data.data.articles[`${topic}`].forEach(article => {
        // console.log(article);
        newArticle(article);
      })
    );
  })
  .catch(err => {
    console.log(err);
  });

function newArticle(newArticle) {
  var articles = document.querySelector(".cards-container");
  var article = document.createElement("div");
  article.classList.add("card");
  articles.appendChild(article);
  var title = document.createElement("div");
  title.classList.add("headline");
  article.appendChild(title);
  title.textContent = `${newArticle.headline}`;
  var author = document.createElement("div");
  author.classList.add("author");
  article.appendChild(author);
  var imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  author.appendChild(imgContainer);
  var img = document.createElement("img");
  imgContainer.appendChild(img);
  img.src = `${newArticle.authorPhoto}`;
  var name = document.createElement("span");
  author.appendChild(name);
  name.textContent = `${newArticle.authorName}`;
}
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
