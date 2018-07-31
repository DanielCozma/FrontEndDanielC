 var getName=function(callback){
    var firstName=prompt("First name")
    var lastName=prompt("Last name")
    var fullName;
    
    setTimeout(function(){
      fullName = firstName+' '+lastName
      if(typeof callback==='function'){
        callback(fullName)
      }
    },2000)
    
    return fullName;
  }