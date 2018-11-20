window.onload = function () {
    let open = document.getElementById('open-btn'),
        name_value = document.querySelector('.name-value'),
        goods_value = document.querySelector('.goods-value'),
        budget_value = document.querySelector('.budget-value'),
        items_value = document.querySelector('.items-value'),
        employers_value = document.querySelector('.employers-value'),
        discount_value = document.querySelector('.discount-value'),
        isopen_value = document.querySelector('.isopen-value'),
        goods_item = document.querySelectorAll('.goods-item'),

        goods_btn = document.querySelector('.goods-item-btn'),
        budget_btn = document.querySelector('.count-budget-btn'),
        employers_btn = document.querySelector('.hire-employers-btn'),

        choose_item = document.querySelector('.choose-item'),
        time_value = document.querySelector('.time-value'),
        count_budget_value = document.querySelector('.count-budget-value'),
        hire_employers_item = document.querySelectorAll('.hire-employers-item');

    let money,

        price;

open.addEventListener('click', function () {
    setTimeout(start, 2000)
});
    
function start() {
        money = prompt("Jūsu budžets?");

        while (isNaN(money) || money == '' || money == null) {
            money = prompt("Jūsu budžets?");
        }

        budget_value.innerText = money;
    if( money > 5000) {
        discount_value.style.backgroundColor = 'green';
        discount_value.textContent  ='Ar atlaidi ' + money / 100 *80;
    }

        name_value.innerText = prompt("Veikala nosaukums?");

    };

goods_btn.addEventListener('click', function () {

        for (let i = 0; i < goods_item.length; i++) {
            let a = goods_item[i].value;


            if ((typeof (a)) === 'string' && (typeof (a)) != null && a.length < 50) {
                console.log('All ok');
                mainList.shopGoods[i] = a;
                goods_value.innerText = mainList.shopGoods;
            } else {
                i = i - i;
            }
        }
    });

choose_item.addEventListener('change', function () {
        let items = choose_item.value;

        if (isNaN(items) && items != '') {
            mainList.shopItems = items.split(', ');
            mainList.shopItems.sort();

            items_value.innerText = mainList.shopItems;

        }
    });

time_value.addEventListener('change', () => {
        let time = time_value.value;

        if (time < 0) {
                mainList.open = false;
            } else if (time > 8 && time < 20) {
                mainList.open = true;
            } else if (time < 24) {
                mainList.open = false;
            } else {
                mainList.open = false;
            };
        if(mainList.open == true) {
            isopen_value.style.backgroundColor = 'green'
        } else {
            isopen_value.style.backgroundColor = 'red'
            
        }


    });
    
budget_btn.addEventListener('click', () => {
    count_budget_value.value = money / 30;
}); 

    
employers_btn.addEventListener('click', () => {
    for ( let i = 0; i < hire_employers_item.length; i++ ) {
      let name = hire_employers_item[i].value;
        mainList.employers[i] = name;
        employers_value.textContent += mainList.employers[i] + ', ';
    }
});
    
  

    const mainList = {
        budget: money,
        shopName: name,
        shopGoods: [],
        employers: {},
        open: false,
        discount: false,
        shopItems: [],

    }

}
