let myLibrary = []

const dataTable = document.getElementById('displayTable')
const submitButton = document.getElementById('submitButton')
let deleteButtons = document.querySelectorAll('.delete-button')
let id = 0

function Novel(name, author, language, year) {
    //Assigning all the given parameter values to the object
    this.name = name
    this.author = author
    this.language = language
    this.year = year
    this.read = false
    this.id = id++
    this.novelElement //stores the respective html element
}

Novel.prototype.toggleRead = function() {
    (this.read == false) ? this.read = true : this.read = false
}

Novel.prototype.addToLibrary = function() {
    myLibrary.push(this)
}

Novel.prototype.removeFromLibrary = function() {
    //removes the book at the specific ID from the array
    myLibrary.splice(this.id, 1)
}

Novel.prototype.undisplayNovel = function() {
    this.removeFromLibrary()
    //removes all relevant DOM elements associated with the Novel in the HTML table
    const novelRow = document.getElementById(this.name)
    novelRow.remove()
}

Novel.prototype.displayNovel = function() {
    //creating the html row element for the novel, assigning it an ID and also saving it as an object variable
    const novelRow = document.createElement('tr')
    novelRow.id = this.name
    this.novelElement = novelRow

    //filling out the table data with values from the novel object 
    const novelName = document.createElement('td')
    novelName.textContent = this.name

    const novelAuthor = document.createElement('td')
    novelAuthor.textContent = this.author

    const novelLanguage = document.createElement('td')
    novelLanguage.textContent = this.language

    const novelYear = document.createElement('td')
    novelYear.textContent = this.year

    const novelRead = document.createElement('td')
    let readStatus
    (this.read == false) ? readStatus = "Not Read" : readStatus = "Read"
    novelRead.textContent = readStatus

    const novelDelete = document.createElement('button')
    novelDelete.textContent = "Delete Novel"
    novelDelete.classList.add('delete-button')

    //appending all the newly created html elements to the existing DOM
    dataTable.append(novelRow)
    novelRow.append(novelName)
    novelRow.append(novelAuthor)
    novelRow.append(novelLanguage)
    novelRow.append(novelYear)
    novelRow.append(novelRead)
    novelRow.append(novelDelete)

    //adds all the relevant event listeners to be able to delete dynamically created novel objects
    deleteListeners()
}

const gameOfThrones = new Novel ("A Game of Thrones", "George R.R. Martin", "English", 1996)
const fateStayNight = new Novel ("Fate/Stay Night", "Kinoko Nasu", "Japanese", 2004)
const crimeAndPunishment = new Novel("Crime and Punishment", "Fyodor Dostaevsky", "Russian", 1866)

gameOfThrones.addToLibrary()
fateStayNight.addToLibrary()
crimeAndPunishment.addToLibrary()

for (let novel of myLibrary) {
    novel.displayNovel()
}

submitButton.addEventListener('click', function() {
    //saving the user input in all of the input fields as variables
    const novelName = document.getElementById('book_name').value
    const novelAuthor = document.getElementById('author_name').value
    const novelLanguage = document.getElementById('original_language').value
    const novelDate = document.getElementById('publish_date').value

    //creating a new Novel object with the variables
    const newBook = new Novel (novelName, novelAuthor, novelLanguage, novelDate)

    //checks the read status from the dropdown menu in the input section
    const novelRead = document.getElementById('readStatus').value
    //runs the toggleRead function if the read selection was chosen from the dropdown menu
    if (novelRead == "read") {
        newBook.toggleRead()
    } 

    //adds the new book to the library and updates the html page layout to display the library
    newBook.addToLibrary()
    newBook.displayNovel()
})

function deleteListeners(){
    //creates a nodelist of all the DOM elements with the delete-button class
    deleteButtons = document.querySelectorAll('.delete-button')
    
    //loops through each button in the deleteButtons nodelist
    deleteButtons.forEach(button => {
        //and adds an event listener for each button that will activate on click
        button.addEventListener('click', event => {
  
            //compares the current button with the all books in the user's library
            for (book of myLibrary) {
                if (book.name === button.parentNode.id) {
                    //deletes the book which matches the ID given to the row in the DOM
                    book.undisplayNovel()
                }
            }
        })
    })
}