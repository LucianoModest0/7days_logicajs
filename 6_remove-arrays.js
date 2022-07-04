
let Fruits = [];
let Bakery = [];
let Frozen = [];
let Cereals = [];
let Cleaning = [];

let list = [Fruits, Bakery, Frozen, Cereals, Cleaning];

function buy () {

    for(i = 0; i => 0; i++) {
    let answer = prompt ("Do you want to add something to your shopping list?\n Answer 'y' or 'n'.\n If u want to remove some item from the list type 'r'");

    if (answer == 'y'){
        let product = prompt ("Tell us what would you like to buy:");
       
        let pCategory = prompt (`what is the product category?\n 1 to Fruit\n 2 to Bakery\n 3 to Frozen\n 4 to Cereals\n 5 to Cleaning`);
        
        if (pCategory == 1) {
            Fruits.push(product)
        } else if (pCategory == 2){
            Bakery.push(product)
        } else if (pCategory == 3){
            Frozen.push(product)
        } else if (pCategory == 4){
            Cereals.push(product)
        } else if (pCategory == 5){
            Cleaning.push(product)
        }       
    } else if (answer == 'r'){
        let remove =  prompt ("which item do you want to remove?")
        let findFruits = Fruits.indexOf(remove);
        let findBakery = Bakery.indexOf(remove);
        let findFrozen = Frozen.indexOf(remove);
        let findCereals = Cereals.indexOf(remove);
        let findCleaning = Cleaning.indexOf(remove);


        if (findFruits != -1) {
            let removedItem = Fruits.splice(find, 1)

            document.getElementById('shoplist').innerHTML = `<br>Item removed, thats your updated shopping list:<br><br> Fruits: ${Fruits}<br> Bakery: ${Bakery}<br> Frozen: ${Frozen}<br> Cereals: ${Cereals}<br> Cleaning: ${Cleaning}`
            break
        } else if (findBakery != -1) {
            let removedItem = Bakery.splice(find, 1)

            document.getElementById('shoplist').innerHTML = `<br>Item removed, thats your updated shopping list:<br><br> Fruits: ${Fruits}<br> Bakery: ${Bakery}<br> Frozen: ${Frozen}<br> Cereals: ${Cereals}<br> Cleaning: ${Cleaning}`
            break
        } else if (findFrozen != -1) {
            let removedItem = Frozen.splice(find, 1)

            document.getElementById('shoplist').innerHTML = `<br>Item removed, thats your updated shopping list:<br><br> Fruits: ${Fruits}<br> Bakery: ${Bakery}<br> Frozen: ${Frozen}<br> Cereals: ${Cereals}<br> Cleaning: ${Cleaning}`
            break
        } else if (findCereals != -1) {
            let removedItem = Cereals.splice(find, 1)

            document.getElementById('shoplist').innerHTML = `<br>Item removed, thats your updated shopping list:<br><br> Fruits: ${Fruits}<br> Bakery: ${Bakery}<br> Frozen: ${Frozen}<br> Cereals: ${Cereals}<br> Cleaning: ${Cleaning}`
            break
        } else if (findCleaning != -1) {
            let removedItem = Cleaning.splice(find, 1)

            document.getElementById('shoplist').innerHTML = `<br>Item removed, thats your updated shopping list:<br><br> Fruits: ${Fruits}<br> Bakery: ${Bakery}<br> Frozen: ${Frozen}<br> Cereals: ${Cereals}<br> Cleaning: ${Cleaning}`
            break
        } 
       
       

    } else if (answer == 'n') {
        document.getElementById('shoplist').innerHTML = `<br>Well done, thats your shopping list:<br><br> Fruits: ${Fruits}<br> Bakery: ${Bakery}<br> Frozen: ${Frozen}<br> Cereals: ${Cereals}<br> Cleaning: ${Cleaning}`
    break
    } 
}

}
