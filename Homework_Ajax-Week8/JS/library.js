var getQuotes=function(callback){
  var nrQuotes=prompt("Number of quotes")
$.ajax({
  url: 'https://breaking-bad-quotes.herokuapp.com/v1/quotes/'+nrQuotes,
  method: 'GET',
  success: function(response){
    callback(response);
  },
})
  }
