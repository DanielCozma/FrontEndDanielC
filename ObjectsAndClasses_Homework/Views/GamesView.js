window.addEventListener("load", function(){
  var containerEl=document.getElementById("games-list");
  
  var gamesModel=new Games();
  gamesModel.getAll().then(function(response){
    displayAllGames(response);
  });
  
 function displayAllGames(gamesData) {
    for(var i=0; i<gamesData.length; i++) {
      var game= new Game(gamesData[i]);
      console.log(game);
      displayGame(game);
    }
  }
  
  function displayGame(game) {
    var liEl = document.createElement('li');
    
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = game.title;
    
    var idEl = document.createElement('h1');
    idEl.innerHTML = game._id;
    
    titleEl.addEventListener("click", function(){
      window.location="http://cursuri-cozmaedaniel108043.codeanyapp.com/ObjectsAndClasses_Homework/Templates/Game.html?gameId="+game._id;
    })
    
    var descriptionEl = document.createElement('p');
    descriptionEl.innerHTML = game.description;
    
    var imageUrlEl = document.createElement('div');
    console.log('game', game.imageUrl);
    imageUrlEl.innerHTML = '<img src="'+game.imageUrl+'" alt="Game picture">';
    
    var gameDelete=document.createElement('h3');
    gameDelete.innerHTML='Delete game'; 
    
    gameDelete.addEventListener("click", function(){
    //alert("S-a apasat");
	  $.ajax({
    url: "https://games-world.herokuapp.com/games/"+game._id,
    method: "DELETE",
    success: function(data){
      console.log("Game Deleted");
      location.reload();
    },
	}); 
    })
    
    liEl.appendChild(titleEl);
    liEl.appendChild(descriptionEl);
    liEl.appendChild(imageUrlEl);
    liEl.appendChild(gameDelete);
            
    containerEl.appendChild(liEl); 
  }
  
  $('#postGame').on('click', postGameTitle);
  function postGameTitle(){
	//alert("S-a apasat");
	var gameTitle=$('[name="gameName"]').val();
  var gameDescription=$('[name="gameDescription"]').val();
  var gameUrl=$('[name="gameUrl"]').val();
  if(gameUrl==="") gameUrl="https://nerdist.com/wp-content/uploads/2014/10/SuperMarioWorld-970x545.jpg";
	$.ajax({
    url: "https://games-world.herokuapp.com/games",
    method: "POST",
    data: {
      title: gameTitle,
      description: gameDescription,
      imageUrl: gameUrl
      },
    success: function(data){
      console.log("Game posted");
      location.reload();
    },
	}); 
	}
	  
});