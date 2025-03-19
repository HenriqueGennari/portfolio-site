window.addEventListener("scroll",function(){
    let navbar = this.document.querySelector('.nav-bar')
    navbar.classList.toggle('rolagem', this.window.scrollY > 0)
}) 
// EFEITO DE DEIXAR O NAVBAR TRANSPARENTE