// Part 1
// The cafe’s title is a bit too long. Select the #main-title id element and change the text to “Welcome to the Cozy Cafe”. Let’s also improve our page’s appearance by changing the text-align to center on the title as well.
const titleElement = document.querySelector('#main-title')
titleElement.textContent = 'Welcome to the Cozy Cafe'
titleElement.style.textAlign = 'center'
console.log(titleElement)



// Part 2
// Select the body element and change the background color to a soothing pastel shade of your choice. (If you can’t think of a color, bisque, lightsteelblue, and pink are good choices.)
const backgroundgElement = document.querySelector('body')
backgroundgElement.style.backgroundColor = 'snow' 
console.log(backgroundgElement)



// Part 3
// Select the <p> element which is meant to hold the quote of the day. Update it’s content so that it displays a quote of your choice (or use this classic: “Life happens, coffee helps.”).
const paragraphElement = document.querySelector('p')
paragraphElement.textContent = 'Life happens, coffee helps.'
console.log(paragraphElement)



// Part 4
// Select all elements with the class highlight-title and change their font-style to italic. Remember, you might need to iterate through a collection of elements.
const blogsElements = document.querySelectorAll('.highlight-title')
blogsElements.forEach((element) => {
    element.style.fontStyle = 'italic'
})
console.log(blogsElements)



// Part 5
// Let’s add a new item to the Past Menu Items list. Create a new <li> element, set the text to “Rose Cake”, and append it to the list.
const listElement = document.querySelector('#past-menu-items')
const newElement = document.createElement('li')
newElement.textContent = 'Rose Cake';
listElement.appendChild(newElement);
console.log(newElement);



// Part 6
// Select the list of Cafe Specialties and add a list item. Be sure to add content to your newly created <li></li> tags (maybe Karak Tea is on offer now?).
const cafeElement = document.querySelector('#cafe-specialties')
const newSpecials = document.createElement('li')
newSpecials.textContent = 'Karak Tea is on offer now'
cafeElement.appendChild(newSpecials)

console.log(newSpecials)




// Part 7
// Create a new blog post for a recent cafe event. You will need to create a new <div> element with the class .blog-post, a new <h3> with a relevant event title (e.g., “Karak Tea Tasting Event”), and a new <p> with some text describing the event. Make sure the new post matches the style and structure of the other blog posts. Think carefully about the order of element creation and appending.
const newBlog = document.createElement('div')
newBlog.classList.add('blog-post')

const newH = document.createElement('h3')
newH.textContent = 'Karak Tea Tasting Event'

const newP = document.createElement('p')
newP.textContent = 'We held an amazing Kara tea tasting Event, mixing taste with culture!'

const blogsSection = document.querySelector('#blogs');
blogsSection.appendChild(newBlog);

newBlog.appendChild(newH)
newBlog.appendChild(newP)
console.log(newBlog)