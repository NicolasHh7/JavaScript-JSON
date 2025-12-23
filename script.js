// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//const car = {
    //nome: 'Civic',
    //placa: '123123',
    //marca: 'Honda',
    //dono: {
        //nome: 'Gustavo',
        //idade: 30
    //},
//};
const cars = [
  {
    id: 1,
    nome: 'Civic',
    placa: 123123,
    marca: 'Honda',
    dono: {
        nome: 'Gustavo',
        idade: 30
    },
   },
    {
    id: 2,
    nome: 'Accord',
    placa: 98098,
    marca: 'Honda',
    dono: {
        nome: 'Davi',
        idade: 21
    },
   },
     {
    id: 1,
    nome: 'ZR-V',
    placa: 56757,
    marca: 'Honda',
    dono: {
        nome: 'Lucas',
        idade: 50
    },
   },
];
//Transforma a lista em uma string JSON
const carsJSON = JSON.stringify(cars)
//Receve do servidor usanado JSON
//Dado Javascript - Manipular
const carsLIST = JSON.parse(carsJSON)
console.log(carsJSON)