$(document).ready(function() {

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('#psm_on').click(function( clickEvent ) {
    thermostat.powerSavingOn();
    $('#power-saving-status').text(thermostat.powerSaving);
    console.log(thermostat.powerSaving);
  });

  $('#psm_off').click(function() { 
    thermostat.powerSavingOff();  
    $('#power-saving-status').text(thermostat.powerSaving);
    console.log(thermostat.powerSaving);
  });

  $('#temp-up').on('click', function( clickEvent ) {
    console.log(thermostat.currentTemperature());
    thermostat.up();
    console.log(thermostat.currentTemperature());
  });

  $('#temp-down').on('click', function() {
    console.log(thermostat.currentTemperature());
    thermostat.down();
    console.log(thermostat.currentTemperature());
  });

  $('#reset').on('click', function() {
    thermostat.resetTemp();
    console.log(thermostat.currentTemperature());
  });

  $('#power-saving-status').text(thermostat.powerSaving);

});
