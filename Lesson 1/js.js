var budget = prompt("What is your budget? ");
var shopName = prompt("Shop name? ");

var goods1 = prompt("What type of goods will we sell?");
var goods2 = prompt("What type of goods will we sell?");
var goods3 = prompt("What type of goods will we sell?");

var shopGoods = [goods1, goods2, goods3];

var mainList = {
    budget,
    shopName,
    shopGoods,
    employers : {},
    open : true
};

alert("Budget for one day: " + (budget / 30).toFixed(2) + "euro.");

