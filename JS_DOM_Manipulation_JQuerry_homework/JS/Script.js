$(onHtmlLoaded);

function onHtmlLoaded(){
console.log("On HTML Loaded.");
  
//document.getElementById('firstName');
var firstName=$('#firstName')[0];
//document.getElementById('lastName');
var lastName=$('#lastName')[0];
//document.getElementsByName('gen');
var gender=$('[name="gen"]');
//document.getElementById('textUser');
var textUser=$('#textUser')[0];
  
//document.getElementById("btn-submit");
var btnSubmit=$('#btn-submit');
//btnSubmit.addEventListener('click', onValidate);
btnSubmit.on('click', onValidate);
  
function onValidate(){
  if(firstName.value==="")
  {//firstName.style.border='solid 2px red'
  $('#firstName').css("border","solid 2px red");
  }
  if (lastName.value==="")
  {//lastName.style.border='solid 2px red';
  $('#lastName').css('border','solid 2px red');
  }
  if(firstName.value!=="" && lastName.value!=="")
  {//firstName.style.border='none';
  $('#firstName').css("border","none"); 
   //lastName.style.border='none';
  $('#lastName').css('border','none');
  //var okMessage=document.getElementById('okMessage');
  // okMessage.innerHTML='<p>Thank you for contacting us '+firstName.value+'!</p>';
  $('#okMessage').html('<p>Thank you for contacting us '+firstName.value+'!</p>');
  if(gender[0].checked) {genderOfUser="M";}
  else {genderOfUser="F";}
  console.log(firstName.value+' '+lastName.value+" whith gender "+genderOfUser+" comments: "+textUser.value);}
                     } 

}


