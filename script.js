let myLibrary = []

const dataTable = document.getElementById('displayTable')
const submitButton = document.getElementById('submitButton')
let deleteButtons = document.querySelectorAll('.delete-button')
let id = 0

function Novel(name, author, language, year, readValue) {
    //Assigning all the given parameter values to the object
    this.name = name
    this.author = author
    this.language = language
    this.year = year
    this.read = verifyReadValue(readValue)
    this.id = id++ //increases the ID for each new Novel object made
    this.novelElement //stores the respective html row element
    this.readElement //stores the respective html element for the novel's read status
    this.addToLibrary()
}

function verifyReadValue(readValue) {
    if (readValue == "read" || readValue == true) {
        return true
    }
    else {
        return false
    }
}

Novel.prototype.toggleRead = function() {
    (this.read == false) ? this.read = true : this.read = false
}

Novel.prototype.adjustReadText = function() {
    if (this.read == false) {
        this.readElement.textContent = "Not Read"
    }
    else {
        this.readElement.textContent = "Read"
    }
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

    const novelRead = document.createElement('button')
    this.readElement = novelRead
    this.adjustReadText()
    novelRead.classList.add('read-button')
    this.readElement = novelRead

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

    //adds all the relevant event listeners to be able to delete and adjust the read status of dynamically created novel objects
    this.updateNovelListeners()
}

Novel.prototype.updateNovelListeners = function() {
    //creates a nodelist of all the child elements of the row associatied with the novel in the row
    elementList = this.novelElement.childNodes

    //loops through each element in the nodelist
    elementList.forEach(element => {
        //and adds an event listener for each button that will activate on click
        element.addEventListener('click', event => {
    
            if (element.classList.contains('delete-button')) {
                //deletes the novel which matches the ID given to the row in the DOM
                this.undisplayNovel()
            }
            else if (element.classList.contains('read-button')) {
                //adjusts the read status of the novel
                this.toggleRead()
                this.adjustReadText()
            } 
        })
    })
}

submitButton.addEventListener('click', function() {
    //saving the user input in all of the input fields as variables
    let novelName = document.getElementById('book_name')
    let novelAuthor = document.getElementById('author_name')
    let novelLanguage = document.getElementById('original_language')
    let novelDate = document.getElementById('publish_date')
    let novelRead = document.getElementById('readStatus')

    if (novelName.value.length === 0 || novelAuthor.value.length === 0 || novelLanguage.value.length === 0 || novelDate.value.length === 0) {
        alert("Please fill in all the fields")
    }
    else {
        //creating a new Novel object with the variables
        const newBook = new Novel (novelName.value, novelAuthor.value, novelLanguage.value, novelDate.value, novelRead.value)

        //updates the html page layout to display the library
        newBook.displayNovel()

        //resetting the input fields to be blank after inputting
        novelName.value = ""
        novelAuthor.value = ""
        novelLanguage.value = ""
        novelDate.value = ""
    }
})

const gameOfThrones = new Novel ("A Game of Thrones", "George R.R. Martin", "English", 1996, true)
const lordOfTheRings = new Novel ("Lord of the Rings", "J.R.R. Tolkien", "English", 1954, false)
const dragonBall = new Novel ("Dragon Ball", "Akira Toriyama", "Japanese", 1984, true)
const fateStayNight = new Novel ("Fate/Stay Night", "Kinoko Nasu", "Japanese", 2004, true)
const crimeAndPunishment = new Novel("Crime and Punishment", "Fyodor Dostaevsky", "Russian", 1866, false)

for (let novel of myLibrary) {
    novel.displayNovel()
}