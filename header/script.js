const suggestionsTemplate = document.querySelector("[data-suggestions-template]");
const suggestionsContainer = document.querySelector("[data-suggestions-container]");
const searchInput = document.querySelector("[data-search]");

let users = []; // Array of users

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase() // What is being typed
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value); // Checks if user.name has the search in it
        user.element.classList.toggle("show", isVisible);
        if (isVisible && value.length > 0) {
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