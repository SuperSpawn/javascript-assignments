// Exercise 1: Get the element with the ID of "header"
const header = document.querySelector('#header');
// Exercise 2: Get all elements with the class name of "list-item"
const listItems = document.querySelectorAll(".list-item");
// Exercise 3: Get the first element that matches the CSS selector of ".list-item"
const firstListItem = document.querySelector('.list-item');
// Exercise 4: Get all elements that match the CSS selector of ".list-item"
const cssListItems = document.querySelectorAll(".list-item");
// Exercise 5: Get all child elements of the element with the ID of "main-content"
const mainContentChildren = document.querySelector('#main-content').children;
// Exercise 6: Get all descendant elements of the element with the ID of "main-content"
const mainContentAllDescendants = document.querySelector("#main-content").querySelectorAll("*");
// Exercise 7: Get the parent element of the first list item
const firstListItemParent = firstListItem.parentElement;
// Exercise 8: Get the next element sibling of the first list item
const secondListItem = firstListItem.nextSibling;
// Exercise 9: Create a new list item and add it to the end of the list
const newListItem = document.createElement("li");
newListItem.classList.add('list-item');
firstListItemParent.appendChild(newListItem);
// Exercise 10: Modify the text of the first list item to "Modified list item 1"
firstListItem.innerText = "Modified list item 1";
// Exercise 11: Modify the HTML of the first extra content to "<h2>Modified extra content</h2>"
document.querySelector('#extra-content').firstChild.innerHTML = "<h2>Modified extra content</h2>";
// Exercise 12: Remove the second extra content element
document.querySelector('#extra-content').removeChild(document.querySelector('#extra-content').firstChild.nextSibling);
// Exercise 13: Modify the "src" attribute of an image with the ID of "my-image" to have an image from the internet
document.querySelector('#my-image').src = ''
// Exercise 14: Modify the "data-info" attribute of an element with the ID of "my-element" to have the data "new data"
document.querySelector('#my-element').dataInfo = 'new data';
// Exercise 15: Add a new class "highlight" to an element with the ID of "main-content"
document.querySelector('#main-content').classList.add('highlight');
// Exercise 16: Remove the class "highlight" from an element with the ID of "main-content"
document.querySelector('#main-content').classList.remove('highlight');
// Exercise 17: Modify the background color of an element with the ID of "header" to "blue"
document.querySelector('#header').backgroundColor = 'blue';