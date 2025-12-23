/* O Conversor de Relíquias */
const relicario = {
    nome: "Códice Leicester",
    descricao: "O Códice Leicester (Codex Leicester) é um manuscrito original de Leonardo da Vinci. ",
    valor: 30.8,
    raridade: "Extrema"
}
const string = JSON.stringify(relicario)
console.log(string)
console.log("")
console.log("======== JSON -> STRING ========")
console.log("")
console.log("Nome: " + relicario.nome)
console.log("Descricao: " + relicario.descricao)
console.log("Raridade: " + relicario.raridade)
console.log("Valor: " + relicario.valor)
