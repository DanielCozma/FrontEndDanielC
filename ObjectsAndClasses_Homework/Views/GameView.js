window.addEventListener("load", function(){
  var containerEl=document.getElementById("game-details");
  
  var game=new Game();
  var gameId=getUrlParameter("gameId");
  console.log("Game id=", gameId);
  game._id=gameId;
  game.getGameDetails().then(function(response){
 //      console.log(response);
//     article.title=response.title;
//     article.body=response.body;
    
       displayGameDetails(game);
  });
  
  function displayGameDetails(gameDetails) {
        var titleEl = document.createElement('h1');
        titleEl.innerHTML = game.title;
        containerEl.appendChild(titleEl);
        
       var descriptionEl = document.createElement('p');
       descriptionEl.innerHTML = game.description;
       containerEl.appendChild(descriptionEl);
    
    var imageUrlEl = document.createElement('div');
		imageUrlEl.innerHTML = '<img src="'+gameDetails.imageUrl+'" alt="Game picture">';
		containerEl.appendChild(imageUrlEl);
    }
  
  $('#editGame').on('click', editGameTitle);
	function editGameTitle(){
	//alert("S-a apasat");
	var gameTitle=$('[name="edit_Game"]').val();
	$.ajax({
    url: "https://games-world.herokuapp.com/games/"+gameId,
    method: "PUT",
    data: {
      title: gameTitle,
      },
    success: function(data){
      console.log("Update post");
      location.reload();
    },
	}); 
	}
  
  function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
 }
  
});