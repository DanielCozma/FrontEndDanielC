$(onhtmlloaded);
function onhtmlloaded(){
  var apiUrl="https://jsonplaceholder.typicode.com/posts/";
  getPosts();
    
//  var deletePost=function(id){
//   console.log("Mesaj");
//   $.ajax({
//     url: "https://jsonplaceholder.typicode.com/posts/"+id,
//     method: "DELETE",
//     success: function(){
//       console.log("Deleted post.");
//     },
//   });
// }
 
$('#deletePost').on('click', deletePost);
function deletePost(){
  var id=$('[name="delete"]').val();
  alert(id);
  $.ajax({
    url: apiUrl+id,
    method: "DELETE",
    succes: function(){
    alert("Post with id "+id+" deleted.");
      },
  });
}
  
function getPosts(){
  var listContainer=$('#listPosts');
  $.ajax({
    url: apiUrl,
    success: function(response){
      //console.log("Response", response);
    for(var i=0; i<response.length; i++) {
        //console.log(response[i].title);
      var title="<h3>"+response[i].title+"</h3>";
      listContainer.append(title);
      }
    }
  });
}
  //formular adaugare post --> DE FACUT
}







