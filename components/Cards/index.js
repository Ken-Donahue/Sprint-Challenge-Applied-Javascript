// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
function cardMaker(){      
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        let javascript = response.data.articles.javascript;
        let bootstrap = response.data.articles.bootstrap;
        let tech = response.data.articles.technology;
        let jquery = response.data.articles.jquery;
        let node = response.data.articles.node;
        let cardsContainer = document.querySelector('.cards-container');

        let articles = [
            javascript,
            bootstrap,
            tech,
            jquery,
            node
        ]
        
        for(let i = 0; i < articles.length; i++){
        articles[i].forEach(item => {
            
            let card = document.createElement('div');
            let headline = document.createElement('div');
            let author = document.createElement('div');
            let imgContainer = document.createElement('div');
            let image = document.createElement('img');
            let name = document.createElement('span');
            
            card.appendChild(headline);
            card.appendChild(author);
            author.appendChild(imgContainer);
            imgContainer.appendChild(image);
            card.appendChild(name);
            
            card.classList.add('card');
            headline.classList.add('headline');
            author.classList.add('author');
            imgContainer.classList.add('img-container');
            
            image.src = item.authorPhoto;
            
            headline.textContent = item.headline;
            name.textContent = `By ${item.authorName}`;

            cardsContainer.appendChild(card);
        
        })
    }
    })
    .catch(error => {console.log(error)})
}

cardMaker();