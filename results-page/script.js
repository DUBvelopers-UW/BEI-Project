const resultTemplate = document.querySelector("[result-template]");
const resultsContainer = document.querySelector("[results-container]");
const userSearch = new URLSearchParams(window.location.search).get("search");
const pages = new Map();

document.getElementById("searchStatement").innerHTML = "Showing search results for " + "\"" + userSearch + "\"";

// Fill with text from pages
pages.set("Home", "Our Goal. Help Seniors Remember and Thrive. The Brain Exercise Initiative uses simple math, " + 
"writing and reading aloud exercises as an intervention to improve cognition function in those with " + 
"Alzheimer's Disease. Volunteer. Passionate about neurodegenerative diseases and/or Alzheimer's? Become " + 
"a part of our community of volunteers to engage with seniors in retirement homes in the Seattle area by " + 
"leading read aloud passages, math exercises, and simple writing tasks!");
pages.set("About Us", "Our Mission. We aim to promote integenerational connections between students and seniors " + 
"by implementing brain exercise techniques for improving the cognitive function of seniors and delaying the " + 
"progression of Alzheimier’s Disease.");
pages.set("Volunteer", "Volunteer Information. Tasks. Leading small groups of seniors in reading passages aloud, " + 
"simple math worksheets, short writing prompts. Time Commitment 2 - 3 hour-long shifts per academic quarter. Steps " + 
"to Becoming a Volunteer. 1. Submit an application through this form. 2. Interview with board members. 3. Attend a " + 
"Group Training Session. 4. Get started!");
pages.set("Contact", "Contact Us. Let's Get in Touch. Connect with us or leave us a message and we'll get back to " + 
"you. Contact Info.");

pages.forEach((values, keys) => {
    let re = new RegExp(userSearch, "gi");
    let count = (values.match(re) || []).length;

    // Add relevance mechanism here and remove console.log
    console.log(count);

    if (count > 0) {
        const card = resultTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[result-header]");
        const content = card.querySelector("[result-content]");
        header.textContent = keys;
        content.textContent = values.substring(0, 200) + "...";
        resultsContainer.append(card);
    }
})