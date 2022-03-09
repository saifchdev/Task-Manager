/* This function sets own carousel properties*/
$('.owl-carousel').owlCarousel({
  center: true,
  loop:false,
  margin:10,
  nav:true,
  items:1,
  autowidth:true,
  navText : ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>']
  
})

$('.owl-dot').click(function () {
  owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});

/* This function is used to validate email address and display error*/
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
  document.getElementById("email-validation").innerHTML="Thanks you for subscribing to our news letter";
  document.getElementById("email-validation").style.color="gree";
  document.getElementById("email-validation").style.position="absolute";
  document.getElementById("email-validation").style.left="37%";

  return true;
}
else
{
document.getElementById("email-validation").innerHTML="Please enter a correct email and re-submit";
  document.getElementById("email-validation").style.color="red";
  document.getElementById("email-validation").style.position="absolute";
  document.getElementById("email-validation").style.left="37%";
  return false;
}
}