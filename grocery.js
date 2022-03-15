var Grocery = /** @class */ (function () {
    function Grocery(na, qu, pr) {
        this.name = na;
        this.quantity = qu;
        this.price = pr;
    }
    return Grocery;
}());
//The list of the grocery.
var items = [
    new Grocery("egg", 5, 15),
    new Grocery("milk", 3, 18),
    new Grocery("bread", 2, 11)
];
// let create the access to the  html element with id app
var ele = document.getElementById("app");
// let create the items list 
items.forEach(function (e) {
    var pr = document.createElement("p");
    pr.textContent = "".concat(e.name, " ").concat(e.quantity, " = $").concat(e.price);
    ele.appendChild(pr);
});
