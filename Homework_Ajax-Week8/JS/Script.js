$(domloaded);

function domloaded()
  {
    console.log("DOM loaded.")

$('#callAjax').on('click',function(){
 getQuotes(function(response){
 console.log(response);
 $('.container').html(renderHTML(response));
})
})
  
function renderHTML(response){
  var html='<ul>'
  for(i=0; i<response.length; i++){
  html+='<li>'+response[i].quote+'</li><ul><li>'+response[i].author+'</li></ul>';
  }
  html+='</ul>'
  return html;
 }
}
 