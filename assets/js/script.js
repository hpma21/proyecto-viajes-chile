$(function () {
  $("#enviarCorreo").click(function() { 
      alert("¡El correo ha sido enviado exitosamene!")
  })
  
  
  
  $(".card-text").click(function () {
      $(".card-text").toggle();
  
  
  })
  
  
  $('body').on('dblclick','h4',function() {
  $(this).css("color","red");
  
  
  
  })
  
  
  })



$(document).ready(function(){


$("a").click(function (){
var gato= this.hash


$("html, body").animate(
    {
        scrolltop: $(gato).offset().top 
      },
        800

)




})

})



    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })