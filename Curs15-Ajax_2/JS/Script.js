// $(document).ready(
// function(){
//   console.log("DOM is ready");
//   }
//  )

$(domloaded);

function domloaded()
  {
    console.log("DOM loaded.")
  

// $('#Invoca_Ajax').on('click',function(){
//   alert('Am fost apasat.');
// })

var getShowsData=function(word){
$.ajax({
  url: 'http://api.tvmaze.com/search/shows?q='+word,
  method: 'GET',
  success: manageData,
})
  }

$('#Invoca_Ajax').on('click',function(){
  var word=$('[name="searchWord"]').val();
  getShowsData(word);
})
  
function manageData(data, textStatus, jqXHR){
  $('.container').html(renderHTML(data));
    console.log("TV Shows",data);
    console.log("Nr. of TV Shows", data.length)
    console.log("Status", textStatus)
//     console.log("Headers", jqXHR.getAllResponseHeaders())
//     console.log("joXHR", jqXHR)
  
  }
    
 function renderHTML(data){
   var html='<ul>'
   for(i=0; i<data.length; i++){
   var name=data[i].show.name  
   var score=data[i].score
   var url=data[i].show.url
   // console.log("Title",data[i].show.name)
   html+='<li>'+name+' score:'+score+' url: '+'<a href="'+url+'" target="_blank">'+name+'</a>'+'</li>'
   console.log(score)
   console.log(url)
  }
   html+='</ul>'
   return html;
 }
}
 