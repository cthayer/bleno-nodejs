'use strict';

const BlenoOG = require('bleno/lib/bleno');

class Bleno extends BlenoOG {
  constructor(bindings) {
    super();

    if (!bindings) {
      return;
    }

    this._bindings.removeAllListeners();
    this._bindings = bindings;

    this._bindings.on('stateChange', this.onStateChange.bind(this));
    this._bindings.on('platform', this.onPlatform.bind(this));
    this._bindings.on('addressChange', this.onAddressChange.bind(this));
    this._bindings.on('advertisingStart', this.onAdvertisingStart.bind(this));
    this._bindings.on('advertisingStop', this.onAdvertisingStop.bind(this));
    this._bindings.on('servicesSet', this.onServicesSet.bind(this));
    this._bindings.on('accept', this.onAccept.bind(this));
    this._bindings.on('mtuChange', this.onMtuChange.bind(this));
    this._bindings.on('disconnect', this.onDisconnect.bind(this));

    this._bindings.on('rssiUpdate', this.onRssiUpdate.bind(this));
  }
}

module.exports = Bleno;