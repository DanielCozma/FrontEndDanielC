window.addEventListener("load", function(){
  var containerEl=document.getElementById("articles-list");
  
  var articlesModel=new Articles();
  //articlesModel.getAll() returns 100 articles from API
  //the articles are set as input to the succes function in then
  //response will tahe that value
  articlesModel.getAll().then(function(response){
    //cal displayAllArticles function with the response fron API
    displayAllArticles(response);
  });
  
  //exactly the same as
  //articlesModel.getAll().then(displayAllArticles);
  
  function displayAllArticles(articlesData) {
    for(var i=0; i<articlesData.length; i++) {
      var article= new Article(articlesData[i]);
      displayArticle(article);
    }
  }
  
  function displayArticle(article) {
    var liEl = document.createElement('li');
    
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = article.title;
    
    titleEl.addEventListener("click", function(){
      window.location="http://cursuri-cozmaedaniel108043.codeanyapp.com/Curs20-OOP-Workshop/Templates/article.html?articleId="+article.id;//articel ID
    })
    
    var bodyEl = document.createElement('p');
    bodyEl.innerHTML = article.body;
    
    liEl.appendChild(titleEl);
    liEl.appendChild(bodyEl);
    
    containerEl.appendChild(liEl); 
  }
});