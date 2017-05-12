$(document).ready(function() {

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);
  $('#power-saving-status').text(thermostat.powerSaving);
  $('#energy-usage-status').text(thermostat.energyUsage());

  function temperatureUpdate() {
    $('#temperature').text(thermostat.temperature);
    $('#energy-usage-status').text(thermostat.energyUsage());
    $('#energy-usage-status').attr('class', thermostat.energyUsage());
  }

  $('#psm_on').click(function( clickEvent ) {
    thermostat.powerSavingOn();
    $('#power-saving-status').text(thermostat.powerSaving);
  });

  $('#psm_off').click(function() {
    thermostat.powerSavingOff();
    $('#power-saving-status').text(thermostat.powerSaving);
  });

  $('#temp-up').on('click', function( clickEvent ) {
    thermostat.up();
    temperatureUpdate();
  });

  $('#temp-down').on('click', function() {
    thermostat.down();
    temperatureUpdate();
  });

  $('#reset').on('click', function() {
    thermostat.resetTemp();
    temperatureUpdate();
  });

  console.log(1);

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London,ukid=524901&APPID=18e1478b463128c7946ee3e49b259d84', function(getWeather) {
    $('#weather_london').text(getWeather.main.temp)
  });
console.log(3);
});
