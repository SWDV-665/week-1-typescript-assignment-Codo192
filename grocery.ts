
class Grocery {      // define the class name grocery 
    name: string;
    quantity: number;
    price: number;

    constructor(na: string, qu: number, pr: number){
        this.name = na;
        this.quantity = qu;
        this.price = pr;
    }
}

//The list of the grocery.

let items = [
    new Grocery("egg", 5, 15),
    new Grocery("milk", 3, 18),
    new Grocery("bread", 2, 11)
]

// let create the access to the  html element with id app
const ele = document.getElementById("app");

// let create the items list 
items.forEach(e => {
    const pr = document.createElement("p");
    pr.textContent = `${e.name} ${e.quantity} = $${e.price}`;
    ele.appendChild(pr);
});