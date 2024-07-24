var marca = localStorage.getItem("Marca")
if(marca == "Growth"){
    var produtos = ["Creatina", "Whey", "BCAA"];
    var produtosImg = ["Creatina", "Whey", "BCAA"];
    var money = [localStorage.getItem("creatina" + marca), localStorage.getItem("whey" + marca), localStorage.getItem("bcaa" + marca)];
    console.log("a")
}else if(marca == "Max"){
    var produtos = ["Creatina", "whey", "BCAA"];
    var produtosImg = ["../../paginaGrowth/creatinaMax", "../../paginaGrowth/wheyMax", "../../paginaGrowth/bcaaMax"];
    var money = [localStorage.getItem("creatina" + marca), localStorage.getItem("whey" + marca), localStorage.getItem("bcaa" + marca)];
    console.log("a")
}

// Criar um array de objetos para armazenar produtos e vendas
var produtosVendidos = [];

// Associar cada produto ao número de vendas correspondente
for (var i = 0; i < produtos.length; i++) {
    produtosVendidos.push({ produto: produtos[i], vendas: money[i], img: produtosImg[i]});
}

// Ordenar produtosVendidos em ordem decrescente com base no número de vendas
produtosVendidos.sort(function(a, b) {
    return b.vendas - a.vendas;
});

// Selecionar o elemento onde os produtos serão inseridos

var container = document.querySelector(".container")

// Mostrar os produtos mais vendidos
console.log("Lista dos mais vendidos:");
for (var j = 0; j < 3; j++) {
    var div_p = document.querySelector(".content")
    var div = document.createElement("div")
    div.className = "produto";

    var img = document.createElement("img");
    img.className = "item";
    img.src = `./${produtosVendidos[j].img}.png`;
    div.appendChild(img);

    var h2 = document.createElement("h2");
    h2.innerHTML = produtosVendidos[j].produto;
    div.appendChild(h2);

    var span = document.createElement("span");
    span.innerHTML = `Comprados: ${produtosVendidos[j].vendas}`;
    div.appendChild(span);
    
    var button = document.createElement("button");
    button.className = "buy-button";
    button.innerHTML = "Comprar";
    div.appendChild(button);
    div_p.appendChild(div)
    container.appendChild(div_p);
    console.log(`${produtosVendidos[j].produto}: ${produtosVendidos[j].vendas} vendas`);
}


var home = document.getElementById("home")

home.addEventListener("click", () => {
    window.location.href = "../../index.html"
})