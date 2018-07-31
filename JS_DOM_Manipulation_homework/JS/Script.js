//Get element by ID
console.log("Comments list",document.getElementById('comment-list'));
window.addEventListener("load", function(event) {
 console.log("All resources finished loading!");
 });
// document.addEventListener("DOMContentLoaded", function(event) {
//  console.log("DOM fully loaded and parsed");
//  });

document.addEventListener("DOMContentLoaded", onhtmlloaded);

function onhtmlloaded(){
  
var firstName=document.getElementById('firstName');
var lastName=document.getElementById('lastName');
var gender=document.getElementsByName('gen');
var textUser=document.getElementById('textUser');
  
var btnSubmit=document.getElementById("btn-submit");
btnSubmit.addEventListener('click', onValidate);
  
function onValidate(){
  if(firstName.value==="")
  {firstName.style.border='solid 2px red'}
  if (lastName.value==="")
  {lastName.style.border='solid 2px red'}
  if(firstName.value!=="" && lastName.value!=="")
  {firstName.style.border='none';
   lastName.style.border='none';
  var okMessage=document.getElementById('okMessage');
  okMessage.innerHTML='<p>Thank you for contacting us '+firstName.value+'!</p>';
  if(gender[0].checked) {genderOfUser="M";}
  else {genderOfUser="F";}
  console.log(firstName.value+' '+lastName.value+" whith gender "+genderOfUser+" comments: "+textUser.value);}
}

  
// btnSubmit.onclick=function(){
//    if(firstName.value==="")
//   {firstName.style.border='solid 2px red'}
//   if (lastName.value==="")
//   {lastName.style.border='solid 2px red'}
//   if(firstName.value!=="" && lastName.value!=="")
//   {
//   var okMessage=document.getElementById('okMessage');
//   okMessage.innerHTML='<p>Thank you for contacting us '+firstName.value+'!</p>';
//   console.log(firstName.value+' '+lastName.value);}
// }  
  
}


