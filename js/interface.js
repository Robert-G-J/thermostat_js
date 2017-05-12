$(document).ready(function() {

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('#psm_on').click(function( clickEvent ) {
    
    alert("click");

  });

});
