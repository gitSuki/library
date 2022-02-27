let myLibrary = []

function Novel(name, author, year) {
    this.name = name
    this.author = author
    this.year = year
    this.read = false
}

Novel.prototype.toggleRead = function() {
    (this.read == false) ? this.read = true : this.read = false
}

Novel.prototype.addToLibrary = function() {
    myLibrary.push(this.name)
}