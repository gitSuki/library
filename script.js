let myLibrary = []

const dataTable = document.getElementById('displayTable')
const submitButton = document.getElementById('submitButton')

function Novel(name, author, language, year) {
    //Assigning all the given parameter values to the object
    this.name = name
    this.author = author
    this.language = language
    this.year = year
    this.read = false
    this.novelElement //stores the respective html element
}

Novel.prototype.toggleRead = function() {
    (this.read == false) ? this.read = true : this.read = false
}

Novel.prototype.addToLibrary = function() {
    myLibrary.push(this)
}

function displayLibrary(library) {
    for (book of library) {
        //creating the html row element for the novel, assigning it an ID and also saving it as an object variable
        const novelRow = document.createElement('tr')
        novelRow.id = book.name
        book.novelElement = novelRow

        //filling out the table data with values from the book object 
        const novelName = document.createElement('td')
        novelName.textContent = book.name

        const novelAuthor = document.createElement('td')
        novelAuthor.textContent = book.author

        const novelLanguage = document.createElement('td')
        novelLanguage.textContent = book.language

        const novelYear = document.createElement('td')
        novelYear.textContent = book.year

        const novelRead = document.createElement('td')
        let readStatus
        (book.read == false) ? readStatus = "Not Read" : readStatus = "Read"
        novelRead.textContent = readStatus

        //appending all the newly created html elements to the existing DOM
        dataTable.append(novelRow)
        novelRow.append(novelName)
        novelRow.append(novelAuthor)
        novelRow.append(novelLanguage)
        novelRow.append(novelYear)
        novelRow.append(novelRead)
    }
}

const gameOfThrones = new Novel ("A Game of Thrones", "George R.R. Martin", "English", 1996)
const fateStayNight = new Novel ("Fate/Stay Night", "Kinoko Nasu", "Japanese", 2004)
const crimeAndPunishment = new Novel("Crime and Punishment", "Fyodor Dostaevsky", "Russian", 1866)

gameOfThrones.addToLibrary()
fateStayNight.addToLibrary()
crimeAndPunishment.addToLibrary()

displayLibrary(myLibrary)

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
    displayLibrary(myLibrary)
})