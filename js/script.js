jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function incompSub(){
  var inName = document.getElementById("nameInput").value;
  var inEmail = document.getElementById("emailInput").value;
  var inSubject = document.getElementById("subjectInput").value;
  
  
  if ((inName == "") || (inEmail == "") || (inSubject == "")){
    alert("Fill out all the required info to become an active member in the ISUD.");
  }
  else {
    alert("Thank you, " + inName + "! Expect a reply within 1-3 business days.");
  }
  
}