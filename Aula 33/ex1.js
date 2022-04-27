let pessoa = {
    nome: "Matheus",
    idade: 20
}
console.log(pessoa.nome)
console.log(pessoa.idade)

var a = 100

//////

b = a + "100"
console.log(b)

typeof(a)
typeof(b)

console.log(typeof(a))
console.log(typeof(b))

a = a + "100"
console.log(typeof(a))

//////

function multiplicacao(num){
    return num*num
}

let result = multiplicacao(9)

console.log("result = " + result)

//////

var square = function(num){
       num*num
}

square(4)
 var squareArrow = (num) => num*num
 squareArrow(5)
 console.log(squareArrow)

 //////

var pessoa2 = () => ({
    idade: 20,
    nome: 'matheus'
})

var p2 = pessoa2()
console.log(p2)