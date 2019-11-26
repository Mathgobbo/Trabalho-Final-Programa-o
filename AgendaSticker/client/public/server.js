

const fetchUrl = 'http://localhost/AgendaSticker/server/insert.php';
var fd = new FormData();
fd.append('x','asas')


fd.append('titulo', 'ba')
function insertData(){
    fetch(fetchUrl, {
        method: 'get'
       })
    .then((res)=>{
        if (res.status >= 200 && res.status < 300) {
            return res.text()
        }
        throw new Error(response.statusText)
    }).then(response=>{
        console.log(response)
    }).catch(err=>{
        console.log(err)
    })

}

document.querySelector('#submit').addEventListener('click',()=>{
    insertData();
})


function readData(){
    createCard('a','h','k')
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

    document.querySelector('.row').appendChild(card_col);
}





