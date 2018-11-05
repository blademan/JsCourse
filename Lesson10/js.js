var goods = {
    "121212" : {
        "name" : "Banana",
        "cost" : "30",
        "img"  : "https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Crooked_Banana-128.png",
        "sklad" : "yes"
    },
    "129999" : {
        "name" : "Tomato",
        "cost" : "5",
        "img"  : "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
        "sklad" : "yes"
    },
    "129923" : {
        "name" : "Tomato",
        "cost" : "5",
        "img"  : "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
        "sklad" : "yes"
    },
    "1299ee99" : {
        "name" : "Tomato",
        "cost" : "5",
        "img"  : "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
        "sklad" : "yes"
    }
};

console.log(goods);

var out = ' ';
for ( var key in goods) {
    out +='Nosaukums: ' +goods[key].name + '<br>';
    out +='Cena: ' + goods[key].cost + '<br>';
    out +='Ir uz vietas: ' + goods[key].sklad + '<br>';
    out +='<img src="' +goods[key].img +'">';
    out += '<hr>';
}
document.getElementById('out').innerHTML = out;