let myLibrary = []

const display = document.getElementById('displayArea')

function Novel(name, author, language, year) {
    //Assigning all the given parameter values to the object
    this.name = name
    this.author = author
    this.language = language
    this.year = year
    this.read = false
}

Novel.prototype.toggleRead = function() {
    (this.read == false) ? this.read = true : this.read = false
}

Novel.prototype.addToLibrary = function() {
    myLibrary.push(this)
}

function displayLibrary(library) {
    for (book of library) {
        novelDiv = document.createElement('div')
        novelName = document.createElement('div')
        novelName.textContent = book.name

        novelAuthor = document.createElement('div')
        novelAuthor.textContent = book.author

        novelLanguage = document.createElement('div')
        novelLanguage.textContent = book.language

        novelYear = document.createElement('div')
        novelYear.textContent = book.year

        display.append(novelDiv)
        novelDiv.append(novelName)
        novelDiv.append(novelAuthor)
        novelDiv.append(novelLanguage)
        novelDiv.append(novelYear)
    }
}

let gameOfThrones = new Novel ("A Game of Thrones", "George R.R. Martin", "English", 1996)
let fateStayNight = new Novel ("Fate/Stay Night", "Kinoko Nasu", "Japanese", 2004)
let crimeAndPunishment = new Novel("Crime and Punishment", "Fyodor Dostaevsky", "Russian", 1866)

gameOfThrones.addToLibrary()
fateStayNight.addToLibrary()
crimeAndPunishment.addToLibrary()

displayLibrary(myLibrary)