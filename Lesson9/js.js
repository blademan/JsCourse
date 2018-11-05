var man = {
    "name" : "Alex",
    "age" : 33,
    "id" : "1234d",
    "sex" : "male"
};
var man2 = {
    "name" : "Alex",
    "age" : 39,
    "id" : "1234d",
    "sex" : "male",
    
    "year" : function () {
        return 2018 - this.age;
    }
};



// console.log(man);

// console.log(man.name);
// console.log(man['name']);
// var a= 'name';
// console.log(man[a]);

console.log( man2.year() );

var m = {
    "mas" : [5, 6, 78, 4, 1],
    "sum" : function () {
        var sum = 0;
        for ( var i = 0; i< this.mas.length; i++) {
            sum = sum + this.mas[i];
        }
        return sum;
    }
}

console.log(m.sum());