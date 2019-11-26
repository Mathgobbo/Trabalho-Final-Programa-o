const fetchUrl = 'http://localhost/AgendaSticker/server/server.php';
var config = {
    method: 'post',
    body: new FormData(document.querySelector('#formInsert'))
    }

function insertData(){
    fetch(fetchUrl, config)
    .then((res)=>{
        return res.json;
    }).then(response=>{
        console.log(response)
    })

}

document.querySelector('#submit').addEventListener('click',()=>{
    insertData();
})


function readData(){

    // fetch(fetchUrl, config).then(response=>{
    //     return response.json
    // }).then(res=>{
    //     console.log(res)
    // }).catch(err=>{
    //     console.log(err)
    // })

    document.querySelector('.row').appendChild(card_col);
}


// Função para criar Card
function createCard(title, sub, text){
    
    var card_col = document.createElement('div');
    card_col.className = "col-md-0";
    
    var card = document.createElement('div');
    card.className = "card";
    card.style = "width: 18rem;";
    
    var card_body = document.createElement('div');
    card_body.className = "card-body";
    
    var card_title = document.createElement('h5'); 
    card_title.className = "card-title";
    card_title.innerHTML = title
    
    var card_subtitle = document.createElement('h5'); 
    card_subtitle.className = "card-subtitle mb-2 text-muted";
    card_subtitle.innerHTML = sub;
    
    var card_text = document.createElement('p'); 
    card_text.className = "card-text";
    card_text.innerHTML = text;
    
    var card_del_bt = document.createElement('a'); 
    card_del_bt.className = "card-link";
    card_del_bt.innerHTML = "&times;";
    card_del_bt.style = "font-size: 1.5em; font-weight: 900;";
    card_del_bt.href = "#"
    
    card_body.appendChild(card_title);
    card_body.appendChild(card_subtitle);
    card_body.appendChild(card_text);
    card_body.appendChild(card_del_bt);
    
    card.appendChild(card_body);
    card_col.appendChild(card)

    return card_col
}





