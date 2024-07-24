var prox = document.getElementById("depois");
var ant = document.getElementById("antes");
var marca = localStorage.getItem("Marca")
var imgProduto = document.getElementById("imgProduto")
console.log(marca)

var produtos = undefined
var produtosDesc = undefined
var imgs = undefined
var valor = undefined
var pix = undefined

if(marca == "Growth"){
    produtos = ["creatina", "whey", "bcaa"];
    produtosDesc = ["Esse produto melhora sua performace na academia", "Quanto mais Proteina melhor", "Quanto mais melhor"];
    imgs = ["./creatinaGrowth.png", "./wheyGrowth.png", "../MaisVendidosgr-main/maisVendidos/BCAA.png"];
    valor = [100, 120, 100]
    pix = [89,110, 90]
    imgProduto.src = imgs[0]
}else if(marca == "Max"){
    produtos = ["creatina", "whey", "bcaa"];
    produtosDesc = ["Esse produto melhora sua performace na academia", "Quanto mais Proteina melhor", "quanto mais melhor"];
    imgs = ["./creatinaMax.png", "./wheyMax.png" , "./bcaaMax.png"];
    valor = [100, 120, 100]
    pix = [89,110, 90]
    imgProduto.src = imgs[0]
}

var ii = 0;

prox.addEventListener("click", () => {
    ii = (ii + 1) % produtos.length;
    atualizarProduto(ii);
});

ant.addEventListener("click", () => {
    ii = (ii - 1 + produtos.length) % produtos.length;
    atualizarProduto(ii);
});

function atualizarProduto(index) {
    var produtoDiv = document.getElementById("produto");
    var divProximo = document.getElementById("div-proximo");

    produtoDiv.remove();
    divProximo.remove();

    var div = document.createElement("div");
    div.id = "produto";

    var img = document.createElement("img");
    img.src = imgs[index];
    img.id = "imgProduto";
    div.appendChild(img);

    var divInfo = document.createElement("div");
    divInfo.className = "produto-info";
    div.appendChild(divInfo);

    var h1 = document.createElement("h1");
    h1.innerHTML = produtos[index];
    h1.style.textTransform = "Capitalize";
    divInfo.appendChild(h1);

    var span = document.createElement("span");
    span.innerHTML = produtosDesc[index];
    span.style.textTransform = "Capitalize";
    span.id = "descricaoSpan";
    divInfo.appendChild(span);

    var button = document.createElement("button");
    button.innerHTML = "Comprar";
    button.style.textTransform = "Capitalize";
    button.id = "button";
    divInfo.appendChild(button);


    button.addEventListener("click", () => {
        console.log(produtos[index])
        if(localStorage.getItem(produtos[index] + marca)){
            var item = localStorage.getItem(produtos[index] + marca)

            var fake = Number(item) + 1
            localStorage.setItem(produtos[index] + marca, fake)

        }else{
            localStorage.setItem(produtos[index] + marca, 1)
        }
    })

    var span = document.createElement("span")
    span.innerHTML = "Valor: " + valor[index]
    span.id = "valor"
    divInfo.appendChild(span)

    var span = document.createElement("span")
    span.innerHTML = "No Pix: " + pix[index]
    span.id = "pix"
    divInfo.appendChild(span)

    var div2 = document.createElement("div");
    div2.id = "div-proximo";

    var antess = document.createElement("button");
    antess.id = "antes";
    antess.innerHTML = "<";

    div2.appendChild(antess);

    var depoiss = document.createElement("button");
    depoiss.id = "depois";
    depoiss.innerHTML = ">";

    div2.appendChild(depoiss);

    document.body.appendChild(div);
    document.body.appendChild(div2);

    antess.addEventListener("click", () => {
        ii = (ii - 1 + produtos.length) % produtos.length;
        atualizarProduto(ii);
    });

    depoiss.addEventListener("click", () => {
        ii = (ii + 1) % produtos.length;
        atualizarProduto(ii);
    });
}
document.querySelector(".home").addEventListener("click", () => {
    window.location.href = "../index.html"
})