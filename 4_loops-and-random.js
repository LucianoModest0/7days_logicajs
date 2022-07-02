
function guess(){
       
    let realnumber = Math.floor(Math.random() * (10 - 1 + 1) + 1)

    for ( i = 0; i < 3 ;i++) {
        var guessnumber = prompt ('Guess a number between 1 - 10, u have 3 chances')
        if (guessnumber < 1 || guessnumber > 10 ) {
            alert (`[ERRO] try a number between 1 - 10`)
            break
        } else if (guessnumber == realnumber)  {
            alert (`Congrats, u hit the rigth number! >> ${realnumber}! `)
            return
        } else if (guessnumber != realnumber && i == 2){
            alert(`GAME OVER! The number was ${realnumber}`)
        }
        else {
            alert (`u miss, try again`)
        }
    }

}
