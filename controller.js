$(document).ready(function () {
     // Display speak message
  eel.expose(DisplayMessage)
  function DisplayMessage(message) {
    $(".siri-message li:first").text(message);
    $(".siri-message").textillate('start');
  }
  //  Display hood ,,here some problem occur(for reference) 
  eel.expose(ShowHood)
  function ShowHood() {
    $("#Oval").attr("hidden", false);
    $("#Siriwave").attr("hidden", true);
  }

});