// $(document).ready(
// function(){
//   console.log("DOM is ready");
//   }
//  )

$(onhtmlloaded);

function onhtmlloaded() {
  
var loadPosts=function() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    //metoda GET
    succes: function(data) {
    console.log("Posts=", data);
  }
  });
 }

var loadPost=function(id) {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/"+id,
    //metoda GET
    succes: function(data) {
    console.log("Post=", data);
  }
  });
 }

//Create post
var createPost=function(){
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data: {
      title: "Post by noi.",
      body: "Bla, bla, bla, bla.",
      userId: 1,
    },
    success: function(data){
      console.log("Create post", data);
      console.log("Create post with id", data.id);
    }
  });
}
//Request to update a post
var editPost=function(id){
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/"+id,
    method: "PUT",
    data: {
      title: "Edit Post",
      body: "Edit Post body",
      userId: 1,
    },
    success: function(data){
      console.log("Update post", data);
    },
  }); 
}
//Request to delete a post
var deletePost=function(id){
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/"+id,
    method: "DELETE",
    success: function(){
      console.log("Deleted post.");
    },
  });
}

loadPosts();
loadPost(23);
loadPost(6);
  
createPost();
  
editPost(7);
  
deletePost(4);


}
 