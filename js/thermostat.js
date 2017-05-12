// 'use strict'

function Thermostat() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.maxTemperature = 32;
    this.maxTemperaturePSM = 25;
    this.powerSaving = true;
}

Thermostat.prototype.currentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaxTemperature()) {
    return this.temperature;
  }
    return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.minTemperature){
    return this.temperature;
  }
  return this.temperature -= 1 ;
};

Thermostat.prototype.powerSavingOff = function () {
  this.powerSaving = false;
};

Thermostat.prototype.powerSavingOn = function () {
  this.powerSaving = true;
};

Thermostat.prototype.isMaxTemperature = function () {
  if (this.powerSaving === true) {
    return (this.temperature >= this.maxTemperaturePSM);
  }
  return this.temperature === this.maxTemperature;
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) {
    return 'low-usage';
  }
  else if (this.temperature < 25) {
    return 'medium-usage';
  }
  return 'high-usage';
};
