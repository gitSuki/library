let myLibrary = []

const display = document.getElementById('test')

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
    myLibrary.push(this.name)
}

let gameOfThrones = new Novel ("A Game of Thrones", "George R.R. Martin", "English", 1996)
let fateStayNight = new Novel ("Fate/Stay Night", "Kinoko Nasu", "Japanese", 2004)
let crimeAndPunishment = new Novel("Crime and Punishment", "Fyodor Dostaevsky", "Russian", 1866)

gameOfThrones.addToLibrary()
fateStayNight.addToLibrary()
crimeAndPunishment.addToLibrary()

display.textContent = gameOfThrones.name