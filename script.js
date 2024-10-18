function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('contentContainer').innerHTML = html;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar la página:', error);
        });
}



document.getElementById('pagina1').addEventListener('click', function() {
    loadPage('511.html');
});

document.getElementById('pagina2').addEventListener('click', function() {
    loadPage('111.html');
});

document.getElementById('pagina3').addEventListener('click', function() {
    loadPage('166.html');
});

document.getElementById('pagina4').addEventListener('click', function() {
    loadPage('sinmadrid.html');
});
