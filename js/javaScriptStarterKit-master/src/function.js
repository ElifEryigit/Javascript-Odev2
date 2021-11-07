function addToCard(quantity,productName="Elma") {
    console.log("Sepete eklendi : " + productName + "adet : " + quantity)
}

addToCard(10)


let sayHello = () => {
    console.log("Hello World!")
}

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();


function addToCard2(productName, quantity,unitPrice){

}

addToCard2("Elma",5,10)
addToCard2("Armut",2,20)
addToCard2("Limon",3,15)

//Kapsülleme
let product1 = {productName:"Elma",unitPrice:10,quantity:5}

function addToCard3(product){
    console.log("Ürün : " + product.productName)
}


addToCard3(product1)

let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

function addToCard4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCard4(products)


function add(...numbers) { //rest operatörü
    let total = 0;
    for (let i= 0; i< numbers.length; i++) {
        total += numbers[i]
        
    }
    console.log(total)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers = [20,15,500,34,600,12]
console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
    ]
// console.log(icAnadolu)
console.log(icAnadoluSehirleri)

let product5 = {productName:"Elma",unitPrice:10,quantity:5}
