function Article(options){
  options=options || {};
  this.id=options.id;
  this.title=options.title;
  this.body=options.body;
  this.userId=options.userId;  
}

Article.prototype.getArticleDetails=function(){
  //we are saving the value of the current context (article model)
  //later on, in the AJAX succes function we will set attributes on it
  var that=this;  
  return $.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
  .then(function(response){
    that.title=response.title;
    that.body=response.body;
    that.userId=response.userId;
  });  
}