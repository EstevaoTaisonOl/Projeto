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
    imgs = ["../imgs/creatinaGrowth.png", "../imgs/wheyGrowth.png", "../imgs/BCAA.png"];
    valor = [100, 120, 100]
    pix = [89,110, 90]
    imgProduto.src = imgs[0]
}else if(marca == "Max"){
    produtos = ["creatina", "whey", "bcaa"];
    produtosDesc = ["Esse produto melhora sua performace na academia", "Quanto mais Proteina melhor", "quanto mais melhor"];
    imgs = ["../imgs/creatinaMax.png", "../imgs/wheyMax.png" , "../imgs/bcaaMax.png"];
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
    button.innerHTML = "Adicionar ao carrinho";
    button.style.textTransform = "Capitalize";
    button.id = "button";
    divInfo.appendChild(button);


    button.addEventListener("click", () => {
        var produtoNome = [];
        var produtoQuantidade = [];
        var produtoMarca = [];
        var imgComprado = [];
        var valorComprado = [];
        var produto = produtos[index];

        if (localStorage.getItem("ProdutosComprados")) {
            var nomeP = localStorage.getItem("ProdutosComprados");
            var quantidadeP = localStorage.getItem("Quantidade");
            var marcaP = localStorage.getItem("MarcaComprado");
            var imgP = localStorage.getItem("ImgComprado");
            var vlrC = localStorage.getItem("valorComprado");
    
            var arrN = nomeP.split(",");
            var arrQ = quantidadeP.split(",");
            var arrM = marcaP.split(",");
            var arrP = imgP.split(",");
            var arrC = vlrC.split(",");
    
            var produtoExistente = false;
    
            for (var i = 0; i < arrN.length; i++) {
                if (arrN[i] == produto && arrM[i] == marca) {
                    arrQ[i] = Number(arrQ[i]) + 1;
                    produtoExistente = true;
                    break;
                }
            }
    
            if (!produtoExistente) {
                arrN.push(produto);
                arrQ.push(1);
                arrM.push(marca);
                arrP.push(imgs[index]);
                arrC.push(valor[index]);
            }
    
            localStorage.setItem("ProdutosComprados", arrN.join(","));
            localStorage.setItem("Quantidade", arrQ.join(","));
            localStorage.setItem("MarcaComprado", arrM.join(","));
            localStorage.setItem("ImgComprado", arrP.join(","));
            localStorage.setItem("valorComprado", arrC.join(","));
        } else {

            produtoNome.push(produto);
            produtoQuantidade.push(1);
            produtoMarca.push(marca);
            imgComprado.push(imgs[index]);
            valorComprado.push(valor[index])
            localStorage.setItem("ProdutosComprados", produtoNome.join(","));
            localStorage.setItem("Quantidade", produtoQuantidade.join(","));
            localStorage.setItem("MarcaComprado", produtoMarca.join(","));
            localStorage.setItem("ImgComprado", imgComprado.join(","));
            localStorage.setItem("valorComprado", valorComprado.join(","));
        }
    });
    

    var span = document.createElement("span")
    span.innerHTML = "Valor: " + valor[index]
    span.id = "valor"
    divInfo.appendChild(span)


    var div2 = document.createElement("div");
    div2.id = "div-proximo";

    var br = document.createElement("br")
    div2.appendChild(br)

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

atualizarProduto(0)
document.querySelector(".home").addEventListener("click", () => {
    window.location.href = "../index.html"
})

carrinho.addEventListener("click", () => {
    window.location.href = "../carrinho/index.html"
})
