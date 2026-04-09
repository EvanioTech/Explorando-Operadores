let user1 = "Matias"
let age1 = 31
let sexo1 = "Masculino"

let user2 = "Lucia"
let age2 = 28
let sexo2 = "Femenino"

let user3 = "Sofia"
let age3 = 25
let sexo3 = "Femenino"

let user4 = "Pedro"
let age4 = 17
let sexo4 = "Masculino"

console.log("Usuario 1: " + user1 + ", Idade: " + age1 + ", Sexo: " + sexo1)
console.log("Usuario 2: " + user2 + ", Idade: " + age2 + ", Sexo: " + sexo2)
console.log("Usuario 3: " + user3 + ", Idade: " + age3 + ", Sexo: " + sexo3)
console.log("Usuario 4: " + user4 + ", Idade: " + age4 + ", Sexo: " + sexo4)

let frequentaFestaNova = age1 >= 18

console.log("O usuário " + user1 + " frequenta a festa nova? " + frequentaFestaNova)
console.log("O usuário " + user2 + " frequenta a festa nova? " + (age2 >= 18))
console.log("O usuário " + user3 + " frequenta a festa nova? " + (age3 >= 18))
console.log("O usuário " + user4 + " frequenta a festa nova? " + (age4 >= 18))

let frequentaFestaPink = sexo1 === "Feminino"

console.log("O usuário " + user1 + " frequenta a festa pink? " + frequentaFestaPink)
console.log("O usuário " + user2 + " frequenta a festa pink? " + (sexo2 === "Feminino"))
console.log("O usuário " + user3 + " frequenta a festa pink? " + (sexo3 === "Feminino"))
console.log("O usuário " + user4 + " frequenta a festa pink? " + (sexo4 === "Feminino"))

let pessoas = [
    ["Antonio", 30, "Masculino", "Vip"],
    ["Maria", 25, "Feminino", "Regular"],
    ["João", 20, "Masculino", "Regular"],
    ["Ana", 35, "Feminino", "Vip"]
]

let prioridadeFesta = pessoas[0][3] === "Vip"
let regularFesta = pessoas[0][3] !== "Vip"

console.log("O cliente " + pessoas[0][0] + " tem " + pessoas[0][1] + " anos e é do sexo " + pessoas[0][2])

console.log("O cliente " + pessoas[0][0] + " tem prioridade na festa? " + prioridadeFesta)
console.log("O cliente " + pessoas[0][0] + " é regular na festa? " + regularFesta)


