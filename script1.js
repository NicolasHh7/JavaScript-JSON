// JSON
// converter objeto para json
const jsonData = JSON.stringify(objs)
console.log(jsonData)
console.log(typeof jsonData)

// converter json para objeto
const objData = JSON.parse(jsonData)
console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
console.log(pessoa.nome)
})

//To-do List
//Criar um sistema de tarefas onde o usuário pode adicionar listar, atualizar e remover tarefas. Cada tarefa é um objeto JSON, todas as tarefas ficam em uma array, e você vai usar funções para organizar o código.
const list = [{
id: 1,
tarefa: "Adicionar um To-do List",
Horário: "Agora!"
},];
function Main(){
console.log("============= To-Do List =============")
console.log("Menu:")
console.log("1 - Adicionar")
console.log("2 - Remover")
console.log("3 - Atualizar")
console.log("4 - Exibir")
console.log("5 - Sair")
let user = parseInt(prompt("Escolha uma opção: "))
switch(user){
case 1 :
add(); break;
case 2 :
Remove(); break;
case 3 :
atualizar(); break;
case 4 :
exibir(); break;
case 5 :
console.log("Saindo..."); return;
default:
console.log("Erro! Opção Inválida!")
}
Main();
}

function add(){
console.log("============= ADICIONAR =============")
let tarefa = prompt("Digite uma Tarefa:")
let horario = prompt("Horário:")
let id = list.length + 1;
list.push({
id: id,
tarefa: tarefa,
horario: horario
});
console.log("Tarefa Adicionado!")
}
function Remove(){
console.log("============= REMOVER =============")
for(let i = 0; i < list.length; i++){
console.log(list[i].id + " - Tarefa: " + list[i].tarefa)
}
let tarefaRem = parseInt(prompt("Remove uma tarefa pelo ID:"))
for(let i = 0; i < list.length; i++){
if(tarefaRem === list[i].id){
list.splice(list[i].id)
console.log("Tarefa Removida!")
return;
}
console.log("Tarefa não encontrada!")
}
}

function exibir(){
    console.log("============= EXIBIR =============")
    console.log(list)
}
function atualizar(){
    console.log("============= ATUALIZAR =============")  
    for(let i = 0; i < list.length; i++){
        console.log(list[i].id + " - Tarefa: " + list[i].tarefa )
    }
    let user = parseInt(prompt("Digite o ID da tarefa que quer atualizar: "))
    let Tarefa = prompt("Digite a tarefa: ")
    for(let i = 0; i < list.length; i++){
        if(user === list[i].id){
            list[i].tarefa = Tarefa
            console.log("Tarefa Atualizada!"); break;
        }
        console.log("Tarefa não encontrada!"); 
    }
}
Main();