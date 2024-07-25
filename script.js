var marca1 = document.getElementById("h1-1")
var marca2 = document.getElementById("h1-2")
var carrinho = document.getElementById("carrinho")

document.getElementById("marca1").addEventListener("click", function(event) {
    localStorage.setItem("Marca", marca1.innerHTML)
    console.log(marca1.innerHTML +  " foi clicado!");
    // Você pode adicionar mais lógica aqui
});

// Adicionando evento de clique ao segundo link
document.getElementById("marca2").addEventListener("click", function(event) {
    localStorage.setItem("Marca", marca2.innerHTML)
    console.log(marca2.innerHTML +  " foi clicado!");
    // Você pode adicionar mais lógica aqui
});

carrinho.addEventListener("click", () => {
    window.location.href = "./carrinho/index.html"
})