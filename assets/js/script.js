// Função para ativar o active no menu e ele ganhar a estilização
document.addEventListener("DOMContentLoaded", function () {  
    const navLinks = document.querySelectorAll('.nav-link');  
    const currentLocation = window.location.hash.replace('#', '') || 'home'; // Obtem a localização atual  

    navLinks.forEach(link => {  
        if (link.getAttribute('data-page') === currentLocation) {  
            link.classList.add('active'); // Adiciona a classe active ao link correspondente  
        }  
    });  
});  
