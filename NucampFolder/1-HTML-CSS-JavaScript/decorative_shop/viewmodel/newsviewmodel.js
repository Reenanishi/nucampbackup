

function getNews() {
  
    var topContainer = document.getElementById("topcontainer");

    for (var i = 0; i < news.length; i++) {
        var subject = news[i][0];
        var detail = news[i][1];

        topContainer.innerHTML += '<div class="news-container"> <div class="news-sub">' +  subject + '</div><div class="news-detail">' + detail + '</div></div>';
    }
}



