const aviso = document.getElementById("cv")
console.log(aviso)

aviso.addEventListener("click",()=>{
    alert("Você será redirecionado para meu currículo!")
})

// Salvar posição antes do recarregamento
window.addEventListener("beforeunload", function () {
    localStorage.setItem("scrollPosition", window.scrollY);
});

// Restaurar posição após o recarregamento
window.addEventListener("load", function () {
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
    }
});