let myLibrary = []

const dataTable = document.getElementById('displayTable')

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
        novelRow = document.createElement('tr')
        novelRow.id = book.name
        book.novelElement = novelRow

        //filling out the table data with values from the book object 
        novelName = document.createElement('td')
        novelName.textContent = book.name

        novelAuthor = document.createElement('td')
        novelAuthor.textContent = book.author

        novelLanguage = document.createElement('td')
        novelLanguage.textContent = book.language

        novelYear = document.createElement('td')
        novelYear.textContent = book.year

        novelRead = document.createElement('td')
        novelRead.textContent = book.read

        //appending all the newly created html elements to the existing DOM
        dataTable.append(novelRow)
        novelRow.append(novelName)
        novelRow.append(novelAuthor)
        novelRow.append(novelLanguage)
        novelRow.append(novelYear)
        novelRow.append(novelRead)
    }
}

let gameOfThrones = new Novel ("A Game of Thrones", "George R.R. Martin", "English", 1996)
let fateStayNight = new Novel ("Fate/Stay Night", "Kinoko Nasu", "Japanese", 2004)
let crimeAndPunishment = new Novel("Crime and Punishment", "Fyodor Dostaevsky", "Russian", 1866)

gameOfThrones.addToLibrary()
fateStayNight.addToLibrary()
crimeAndPunishment.addToLibrary()

displayLibrary(myLibrary)