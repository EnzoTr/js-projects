const apiUrl = 'https://api.allorigins.win/raw?url=https://zenquotes.io/api/random'
let quote = document.getElementById('quote');
let author = document.getElementById('author');

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = '"' + data[0].q + '"';
    author.innerHTML = '- ' + data[0].a;
    console.log(data);
}

function shareTweet(){
    window.open(href=`https://twitter.com/intent/tweet?text=${quote.innerHTML}`, "Share on Twitter", "width=700, height=400");
}

getQuote(apiUrl);