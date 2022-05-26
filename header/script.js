const suggestionsTemplate = document.querySelector("[data-suggestions-template]");
const suggestionsContainer = document.querySelector("[data-suggestions-container]");
const searchInput = document.querySelector("[data-search]");







let users = []; // Array of users

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase() // What is being typed
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value); // Checks if user.name has the search in it
        user.element.classList.toggle("show", isVisible);

        user.element.classList.onclick(function(){
            alert("test");
        });

        if (value.length > 0) {
            suggestionsContainer.style.display = "block";
        } else {
            suggestionsContainer.style.display = "none";
        }
    })
});

// Gets users from API and stores each one in users array
fetch("https://jsonplaceholder.typicode.com/users")

    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = suggestionsTemplate.content.cloneNode(true).children[0];
            const content = card.querySelector("[data-content]");
            content.textContent = user.name; // Displays user.name for card
            suggestionsContainer.append(card);
            return { name: user.name, element: card }
        })
    })




/* Lunr.js */
/*
var documents = [{
    "name": "Lunr",
    "text": "Like Solr, but much smaller, and not as bright.bright bright"
}, {
    "name": "React",
    "text": "A JavaScript library for building user interfaces."
}, {
    "name": "Lodash",
    "text": "A modern JavaScript utility library delivering modularity, performance & extras."
}]

var idx = lunr(function () {
    this.ref('name')
    this.field('text')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
})

let results = idx.search("bright")
console.log('Results: ', results.length);

console.log('Sanity') */