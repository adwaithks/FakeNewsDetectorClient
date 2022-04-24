document.addEventListener('DOMContentLoaded', fetchFakeNews);
const newsContainer = document.querySelector('.news-container');

function populateNews(news) {
    let newsContent = "";
    if (news.length == 0) {
        newsContent += `
            <div class="coming-soon">
                <h1>Coming Soon...</h1>
            </div>
        `
        newsContainer.innerHTML = newsContent;
        return;
    }
    news.forEach((newsArticle) => {
        newsContent += `
            <div class="news-article">
                <h1 class="news-title">${newsArticle.title}</h1>
                <div class="news-article-info">
                    <div class="news-article-source-date">
                        <h5>${newsArticle.source}</h5>
                        <h5>${newsArticle.datePosted}</h5>
                    </div>
                    <h5>${newsArticle.prediction}</h5>
                </div>
            </div>
        `
    });
}


function fetchFakeNews() {
    let data = [];
    populateNews(data);
    /*
    let url = `https://fakenserver.herokuapp.com/api/predictednews`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        populateNews(data);
    }).catch(err => {

    });
    */
}

