const aberto = document.querySelector(".aberto")
const menu = document.querySelector(".menu")
console.log(aberto)

function ativar(event){
  aberto.classList.toggle("ativo");
  console.log("oi")
}

menu.addEventListener("click", ativar)

