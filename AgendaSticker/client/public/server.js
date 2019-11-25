
function insertData(titulo, subtitulo, descricao){
    const fetchUrl = 'http://localhost/AgendaSticker/server/server.php';

    fetch(fetchUrl, {
        method: 'post',
        body: new FormData(document.querySelector('#formInsert'))
    }).then()

}