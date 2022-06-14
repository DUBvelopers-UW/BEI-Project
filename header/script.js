const suggestionsTemplate = document.querySelector("[data-suggestions-template]");
const suggestionsContainer = document.querySelector("[data-suggestions-container]");
const searchInput = document.querySelector("[data-search]");

// Array of suggestion cards
let suggestionCards = [];

// Array of suggestions for suggestions box
let suggestions = [
    "Home",
    "About Us",
    "Volunteer",
    "Contact",
    "Test"
];

// When user clicks search bar, displays suggestions that match.
searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    let foundMatch = false;
    suggestionCards.forEach(item => {
        const isVisible = item.name.toLowerCase().includes(value);
        item.element.classList.toggle("show", isVisible);
        if (value.length > 0 && isVisible) {
            foundMatch = true;
        } else if (value.length == 0) {
            foundMatch = false;
        }
    })
    suggestionsContainer.classList.toggle("show", foundMatch);
});

// Search bar returns to unfocused state when user clicks out of input
searchInput.addEventListener('focusout', function () {
    setTimeout(function () {
        suggestionsContainer.classList.toggle("show", false);
    }, 100)
})

// Converts suggestions to suggestion cards
suggestionCards = suggestions.map(suggestion => {
    const card = suggestionsTemplate.content.cloneNode(true).children[0];
    card.addEventListener('click', clickHandler);
    const content = card.querySelector("[data-content]");
    content.textContent = suggestion;
    suggestionsContainer.append(card);
    return { name: suggestion, element: card }
})

// Auto fills the text in the search bar with the selected search from the suggestions
function clickHandler(event) {
    const value = event.target.textContent;
    searchInput.value = value;
    suggestionsContainer.classList.toggle("show", false);
}