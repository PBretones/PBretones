const books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(2, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(3, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(4, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(5, "The Selfish Gene", "Richard Dawkins", 0, 12),
    new Book(6, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(7, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(8, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(9, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(10, "The Selfish Gene", "Richard Dawkins", 74012, 12),
];

function generate(){
    
}

update(){
    this.Element.innerHTML = "";
    for (const data of this.dataArray) {
        this.createRow(Object.values(data));
    }

}