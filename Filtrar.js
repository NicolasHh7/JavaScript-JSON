const grimorios = [
  { "titulo": "Caminho das Sombras", "nivel": 5 },
  { "titulo": "Luz Eterna", "nivel": 2 },
  { "titulo": "Chamas de Muspelheim", "nivel": 8 },
  { "titulo": "Ventos do Norte", "nivel": 3 }
];
const filter = grimorios.filter(
    titulos => titulos.nivel > 4
)
console.log(filter)