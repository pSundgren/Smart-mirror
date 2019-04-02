var key = "<API key>";


function fetchNews(key) {
    fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" + key)  
    .then(function(resp) { 
        return resp.json();
    })
    .then(function(data) {
      //console.log(data);
      publishNews(data);
    });
}

function publishNews(newsData){
    document.getElementById("news-title-1").innerHTML = newsData.articles[0].title;
    document.getElementById("news-description-1").innerHTML = newsData.articles[0].description;
    document.getElementById("news-author-1").innerHTML = "Article by: " + newsData.articles[0].author;

    document.getElementById("news-title-2").innerHTML = newsData.articles[1].title;
    document.getElementById("news-description-2").innerHTML = newsData.articles[1].description;
    document.getElementById("news-author-2").innerHTML = "Article by: " + newsData.articles[1].author;
}

setInterval(180*10000, fetchNews(key));
