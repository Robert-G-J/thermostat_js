$(document).ready(function() {

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);
  $('#power-saving-status').text(thermostat.powerSaving);

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
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temp-down').on('click', function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  });

  $('#reset').on('click', function() {
    thermostat.resetTemp();
    $('#temperature').text(thermostat.temperature);
  });



});
