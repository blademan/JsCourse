let money; 
let name;
let time;

function start() {
    
    money = prompt("Jūsu budžets?");
    while(isNaN(money) || money==''|| money ==null){
         money = prompt("Jūsu budžets?");
    }
    
     name = prompt("Veikala nosaukums?").toUpperCase();
    time = 21;
    

}
start();


let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems:[],
    price:'',
    dayBudget:'',
    chooseGoods: function  chooseGoods() {
        for ( let i = 0; i< 3; i++) {
        let a = prompt("Kādu preci tirgosiet?");
        mainList.shopGoods[i] = a;

        if ((typeof(a)) === 'string' && (typeof(a)) != null && a!='') {
        console.log('pareizi');
            mainList.shopGoods[i]= a;
        }
        else{
            i = i -1;
        }
        }    
},
     workTime: function workTime() {
        if(time< 0 ) {
            console.log('neparezi');
        } else if(time>8 && time< 20) {
            console.log('open');
            mainList.open = true;
        } else if( time < 24) {
            console.log('parak vels');
        } else { console.log('tikai 24h');}

    
},
    dayBudget: function dayBudget(){
        mainList.dayBudget = money / 30;
        console.log(mainList.dayBudget);
},
    makeDiscount: function makeDiscount(){
        if(mainList.discount == true) {
            price = (price/100)*80;
        }
},
    hireEmployers: function hireEmployers(){
        for( let i = 0; i< 4; i++) {
            let name = prompt('Empl Name?');
            mainList.employers[i] = name;
        }
    },
    chooseShopItems: function chooseShopItems(){
        let items = prompt('Caur komatu noradiet preces', "");
        mainList.shopItems = items.split(",");
        mainList.shopItems.push(prompt('Pagadiet vēl ', ""));
        mainList.shopItems.sort();
    }
}














console.log(mainList);



