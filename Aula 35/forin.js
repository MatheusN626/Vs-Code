let usuario = {
    nome: 'Cassiano',
    idade: 32,
    email: 'cassiano@transformatec.com'
}

// console.log(usuario["email"])
// console.log(usuario["nome"])
// console.log(usuario.idade)

for (propriedade in usuario) {
    console.log(propriedade + " : " + usuario[propriedade])
}
