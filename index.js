 let userName = getFirstName('Felipe Amaral Silveira Cantos')
 
console.log('Seja Bem vindo' + userName)

 function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
 }
