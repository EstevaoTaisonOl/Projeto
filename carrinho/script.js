const divContent = document.getElementById("content");

var produtoNomeFake = localStorage.getItem("ProdutosComprados");
var produtoPrecoFake = localStorage.getItem("valorComprado");
var produtoQuantidadeFake = localStorage.getItem("Quantidade");
var produtoImgFake = localStorage.getItem("ImgComprado");

var valorTotal = 0;
var frete = 20;

function limparTabela() {
    var tableItens = document.getElementById("tableItens");
    tableItens.innerHTML = ""; // Limpa a tabela
}

function carregar() {
    limparTabela(); // Limpa a tabela antes de recarregar
    var tableItens = document.getElementById("tableItens");

    var thead = document.createElement("thead")
    tableItens.appendChild(thead)

    var tr = document.createElement("tr")
    thead.appendChild(tr)

    var th = document.createElement("th")
    th.innerHTML = "Produtos"
    thead.appendChild(th)

    var th = document.createElement("th")
    th.innerHTML = "Preço"
    thead.appendChild(th)

    var th = document.createElement("th")
    th.innerHTML = "Quantidade"
    thead.appendChild(th)

    var th = document.createElement("th")
    th.innerHTML = "Total"
    thead.appendChild(th)

    var th = document.createElement("th")
    th.innerHTML = "-"
    thead.appendChild(th)


    for (let i = 0; i < produtos.nome.length; i++) {
        (function(i) {


            var tbody = document.createElement("tbody");
            tableItens.appendChild(tbody);

            var tr = document.createElement("tr");
            tbody.appendChild(tr);

            var tdImg = document.createElement("td");
            tr.appendChild(tdImg);

            var img = document.createElement("img");
            img.src = produtos.img[i];
            tdImg.appendChild(img);

            var tdPreco = document.createElement("td");
            tdPreco.innerHTML = "R$ " + produtos.preco[i];
            tr.appendChild(tdPreco);

            var tdQuantidade = document.createElement("td");
            tr.appendChild(tdQuantidade);

            var div = document.createElement("div");
            div.className = "quantity-container";
            tdQuantidade.appendChild(div);

            var buttonMinus = document.createElement("button");
            buttonMinus.innerHTML = "-";
            div.appendChild(buttonMinus);

            var span = document.createElement("span");
            span.innerHTML = produtos.quantidade[i];
            div.appendChild(span);

            var buttonPlus = document.createElement("button");
            buttonPlus.innerHTML = "+";
            div.appendChild(buttonPlus);

            var tdTotal = document.createElement("td");
            tdTotal.innerHTML = "R$ " + (produtos.preco[i] * produtos.quantidade[i]);
            tr.appendChild(tdTotal);

            var tdDelete = document.createElement("td");
            tr.appendChild(tdDelete);

            var imgDelete = document.createElement("img");
            imgDelete.src = "https://img.icons8.com/ios/50/x-coordinate.png";
            imgDelete.width = 25;
            imgDelete.height = 25;
            tdDelete.appendChild(imgDelete);

            const valorSub = document.getElementById("valorSub");
            const freteD = document.getElementById("frete");
            const totalTd = document.getElementById("valorTotal");
            var subTotal = Number(valorSub.innerHTML.replace("R$ ", "")) || 0;
            var itemTotal = Number(produtos.preco[i]) * Number(produtos.quantidade[i]);
            valorTotal += itemTotal;
            valorSub.innerHTML = "R$ " + valorTotal;
            freteD.innerHTML = "R$ " + frete;
            totalTd.innerHTML = "R$ " + (valorTotal + frete);

            imgDelete.addEventListener("click", () => {
                produtos.nome.splice(i, 1);
                produtos.preco.splice(i, 1);
                produtos.quantidade.splice(i, 1);
                produtos.img.splice(i, 1);
                localStorage.setItem("ProdutosComprados", produtos.nome.join(","));
                localStorage.setItem("valorComprado", produtos.preco.join(","));
                localStorage.setItem("Quantidade", produtos.quantidade.join(","));
                localStorage.setItem("ImgComprado", produtos.img.join(","));
                valorTotal = 0;
                carregar();
            });

            buttonMinus.addEventListener("click", () => {
                if (produtos.quantidade[i] > 1) {
                    produtos.quantidade[i]--;
                    span.innerHTML = produtos.quantidade[i];
                    tdTotal.innerHTML = "R$ " + (produtos.preco[i] * produtos.quantidade[i]);
                    valorTotal -= Number(produtos.preco[i]);
                    valorSub.innerHTML = "R$ " + valorTotal;
                    totalTd.innerHTML = "R$ " + (valorTotal + frete);
                    localStorage.setItem("Quantidade", produtos.quantidade.join(","));
                }
            });

            buttonPlus.addEventListener("click", () => {
                produtos.quantidade[i]++;
                span.innerHTML = produtos.quantidade[i];
                tdTotal.innerHTML = "R$ " + (produtos.preco[i] * produtos.quantidade[i]);
                valorTotal += Number(produtos.preco[i]);
                valorSub.innerHTML = "R$ " + valorTotal;
                totalTd.innerHTML = "R$ " + (valorTotal + frete);
                localStorage.setItem("Quantidade", produtos.quantidade.join(","));
            });

            document.body.appendChild(divContent);
        })(i);
    }
}

if (produtoNomeFake && produtoPrecoFake && produtoQuantidadeFake && produtoImgFake) {
    var produtos = {
        nome: produtoNomeFake.split(","),
        preco: produtoPrecoFake.split(","),
        quantidade: produtoQuantidadeFake.split(","),
        img: produtoImgFake.split(",")
    };
    carregar();
} else {
    console.error("Os itens de localStorage não foram encontrados.");
}


const voltar = document.getElementById("voltar")

voltar.addEventListener("click", () => {
    window.location.href = "../index.html"
})