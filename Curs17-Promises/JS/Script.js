// $(document).ready(
// function(){
//   console.log("DOM is ready");
//   }
//  )

$(onhtmlloaded);

function onhtmlloaded() {
 
//   var asyncMock=function(){
//     var result;
    
//     setTimeout(function(){
//      result={
//        postId: 1,
//        postTitle: 'Mock Post',
//      }
//     },2000)
    
//    return result;
//   }
  
//   var postData=asyncMock();
//   console.log('post data', postData);
  
   
//  getName(function(numeIntreg){
//    console.log("Numele este "+numeIntreg)
//  });
  
  $('#clickMe').on('click',function(){
    $('#spinner').css('visibility','visible');
    
    getName(function(fullName){
      $('#spinner').css('visibility','hidden');
      console.log("Numele intreg"+fullName)
    })
  })
}
 