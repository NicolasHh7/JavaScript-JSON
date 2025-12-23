const dadosDaLoja = {
  "loja": "Empório da Bruxa",
  "categorias": [
    {
      "tipo": "Poções",
      "itens": [
        {"nome": "Cura Rápida", "estoque": true},
        {"nome": "Mana Infinita", "estoque": false}
      ]
    },
    {
      "tipo": "Ingredientes",
      "itens": [
        {"nome": "Asa de Morcego", "estoque": true},
        {"nome": "Pó de Estrela", "estoque": true}
      ]
    }
  ]
};

const Estoque = dadosDaLoja.categorias.flatMap(cat => cat.itens).filter(cat => cat.estoque === true).map(cat => cat.nome)
console.log(Estoque)

