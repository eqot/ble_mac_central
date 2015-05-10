noble = require('noble')

noble.startScanning();

noble.on('discover', function(peripheral) {
  console.log(peripheral);

  if (peripheral.advertisement.localName === 'ble_app_sample2') {
    peripheral.connect(function(error) {
      console.log();

      peripheral.discoverAllServicesAndCharacteristics(function(error, services, characteristics) {
        console.log(services);
        console.log(characteristics);

        characteristics[1].write(new Buffer([  0]));
        // characteristics[1].write(new Buffer([255]));
      });
    });
  }
});
