var quadrado = document.getElementById('pendente')
var adicionar = document.getElementById('adicionar')

quadrado.addEventListener('mouseover', function(){

    console.log('aaaaaaaaaaa')
    adicionar.classList.add('padding')

    document.getElementById("adicionar").addEventListener("click", function() {
        window.location.href = "./tarefas.html";
    });
})
