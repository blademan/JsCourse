let money = prompt("What is your budget? ");
let name = prompt("Shop name? ");
let time = 19;

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open : true
};

for (let i = 0; i < 3; i++) {
    let atbilde = prompt("What type of goods will we sell?");
    
  
    
    if (typeof(atbilde) === 'string' && atbilde != '' && atbilde.length < 30 ) {
        console.log("Good !");
         mainList.shopGoods[i] = atbilde;
    } else {
        console.log("NO");
        console.log(i);
        i--;
    }
}
if (time < 0) {
    console.log("Nav iespejams");
} else if(time > 8 && time <20) {
    console.log("Laiks stradat!")
    } else if ( time<24) {
        console.log("Jau parak vels");
        } else {
            console.log("Dienskti ir tikai 24h");
        }





alert("Budget for one day: " + (mainList.budget / 30) + "euro.");

console.log(mainList);