/* 

1.Front-end ou 2.Back-End?

1. React ou Vue?

React: O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.

Vue: Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.

2. c# ou Java?

C#:C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java.

Java: Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems. Em 2008 o Java foi adquirido pela empresa Oracle Corporation.

3. Especialista ou Fullstack?

Especialista: Segundo o dicionário Oxford o especialista é o indivíduo que possui habilidades ou conhecimentos especiais ou excepcionais em determinada prática, atividade, ramo do saber, ocupação, profissão etc.

Fullstack: O desenvolvedor full stack é o profissional habilitado para compreender e operar em todas as camadas do desenvolvimento de um projeto, desde a criação de servidores internos até interfaces de comunicação com o usuário final.

4. Quais tecnologias você gostaria de aprender?

PHP
Normalmente é a primeira linguagem de back-end que os iniciantes escolhem, pois além de ser simples de aprender existem diversas oportunidades de trabalhos com essa linguagem.

Python
Essa é outra linguagem de fácil aprendizado e muito poderosa, atualmente o Python está em constante crescimento e várias empresas estão adotando ela por conta dessas vantagens.

Ruby
Ruby é uma linguagem muito robusta e com uma comunidade de desenvolvedores ativa que apoia todos os programadores iniciantes, tornando uma opção interessante no desenvolvimento back-end.


*/


function chooseFront () {
    
    var answer = prompt("Que legal, você prefere react ou vue?");

    if (answer == 'react') {
        alert("Ótimo, O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.") 
    } else if (answer == "vue"){
        alert("Que legal, o Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.")
    } else {
        alert ("[ERRO] Resposta inválida")
        return
        
    }

    var nextstep = prompt (`e depois de aprender ${answer}, você gostaria de se tornar um especialista ou um desenvolvedor Fullstack? Digite 1 para especialista e 2 para Fullstack.`);

    if (nextstep == "1") {
        alert("Interessante... Segundo o dicionário Oxford o especialista é o indivíduo que possui habilidades ou conhecimentos especiais ou excepcionais em determinada prática, atividade, ramo do saber, ocupação, profissão etc.")
    } else if (nextstep == "2") {
        alert ("Que ótimo, o desenvolvedor full stack é o profissional habilitado para compreender e operar em todas as camadas do desenvolvimento de um projeto, desde a criação de servidores internos até interfaces de comunicação com o usuário final.")
    } else {
        alert ("[ERRO] Resposta inválida")
        return
    }

    let newTech = prompt ("quais novas tecnologias você gostaria de aprender?")

    alert (`Que legal... ${newTech} é uma ótima tecnologia`)

    let techs = 0;
    while (techs < 5) {
        newTech = prompt (`Tem mais alguma tecnologia que você gostaria de aprender?`);
        techs++;

        alert (`continue estudando para dominar ${newTech}`);
    }
}

function chooseBack () {
    
    var answer = prompt("Que legal, você prefere c# ou java?");

    if (answer == "c#") {
        alert("Ótimo, C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java.") 
    } else if (answer == "java"){
        alert("Que legal, Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems. Em 2008 o Java foi adquirido pela empresa Oracle Corporation.")
    } else {
        alert ("[ERRO] Resposta inválida")
        return
        
    }
   
   

    var nextstep = prompt (`e depois de aprender ${answer}, você gostaria de se tornar um especialista ou um desenvolvedor Fullstack? Digite 1 para especialista e 2 para Fullstack.`);

    if (nextstep == "1") {
        alert("Interessante... Segundo o dicionário Oxford o especialista é o indivíduo que possui habilidades ou conhecimentos especiais ou excepcionais em determinada prática, atividade, ramo do saber, ocupação, profissão etc.")
    } else if (nextstep == "2") {
        alert ("Que ótimo, o desenvolvedor full stack é o profissional habilitado para compreender e operar em todas as camadas do desenvolvimento de um projeto, desde a criação de servidores internos até interfaces de comunicação com o usuário final.")
    } else {
        alert ("[ERRO] Resposta inválida")
        return
    }

    let newTech = prompt ("quais novas tecnologias você gostaria de aprender?")

    alert (`Que legal... ${newTech} é uma ótima tecnologia`)

    let techs = 0;
    while (techs < 5) {
        newTech = prompt (`Tem mais alguma tecnologia que você gostaria de aprender?`);
        techs++;

        alert (`continue estudando para dominar ${newTech}`);
    }
}