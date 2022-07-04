    let list = [
        ['Fruit and vegetables, '],
        ['Bakery, '],
        ['Frozen, '],
        ['Cereals and Grain Products, '],
        ['Cleaning, ']
    ];



//vc deseja add comida na lista de compras ? y or n
//qual comida vc deseja add? **digitar nome
// qual categoria ? Frutas, Laticinios, Congelados, Doces, Grãos
// else, n > mostrar lista de compras

    function buy () {
    
        for(i = 0; i => 0; i++) {
        let answer = prompt ("Do you want to add something to your shopping list? Answer y or n");
    
        if (answer == 'y'){
            let product = prompt ("Tell us what would you like to buy:");
           
            let pCategory = prompt (`what is the product category? 1 to Fruit and vegetables, 2 to Bakery, 3 to Frozen, 4 to Cereals and Grain Products, 5 to Cleaning`);
            
            if (pCategory == 1) {
                list[0].push(product)
            } else if (pCategory == 2){
                list[1].push(product)
            } else if (pCategory == 3){
                list[2].push(product)
            } else if (pCategory == 4){
                list[3].push(product)
            } else if (pCategory == 5){
                list[4].push(product)
            }       
            } else {
         document.getElementById('shoplist').innerHTML = `<br>Well done, thats your shopping list: <br><br> ${list[0]}<br> ${list[1]} <br> ${list[2]} <br> ${list[3]} <br> ${list[4]}`
            break
            } 
    }

    }
