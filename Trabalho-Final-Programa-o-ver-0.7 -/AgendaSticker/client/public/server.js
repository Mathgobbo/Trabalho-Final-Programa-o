
function insertData(){
    const fetchUrl = 'http://localhost/AgendaSticker/server/server.php';
    fetch(fetchUrl, {
        method: 'post',
        body: new FormData(document.querySelector('#formInsert'))
    }).then((res)=>{
        return res.json;
    }).then(response=>{
        console.log(response)
    })

}

document.querySelector('#submit').addEventListener('click',()=>{
    insertData();
})