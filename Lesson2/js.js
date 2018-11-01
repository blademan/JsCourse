let money,
    name ,
    time,
    price

function start() {
    money = prompt("What is your budget? ");
    
    while ( isNaN(money) || money == "" || money == null) {
            money = prompt("What is your budget? ");
    }
    name = prompt("Shop name? ").toUpperCase();    
    time = 19;
}
start();

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open : true,
    discount: false
};


function chooseGoods() {
for (let i = 0; i < 3; i++) {
    let atbilde = prompt("What type of goods will we sell?");
    
  
    
    if (typeof(atbilde) === 'string' && isNaN(atbilde) != false && atbilde != '' && atbilde.length < 30 ) {
        console.log("Good !");
         mainList.shopGoods[i] = atbilde;
    } else {
        console.log("NO");
        console.log(i);
        i--;
    }
}
    
};
chooseGoods()

function workTime(Time) {
    

if (time < 0) {
    console.log("Nav iespejams");
} else if(time > 8 && time <20) {
    console.log("Laiks stradat!")
    } else if ( time<24) {
        console.log("Jau parak vels");
        } else {
            console.log("Dienskti ir tikai 24h");
        }

}
workTime(14);


alert("Budget for one day: " + (mainList.budget / 30) + "euro.");

console.log(mainList);