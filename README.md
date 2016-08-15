# ROBOT ARM MK2 Mobile Application 

Mechanical design: http://www.thingiverse.com/thing:1454048

![MK2](http://thingiverse-production-new.s3.amazonaws.com/renders/fd/6a/20/49/04/3ed8d51cd6f4b9dd4e7e3726ac0d3a65_preview_featured.jpg)

## Features

- Connect to NRF51822 BLE Control board
- Control up/down, left/right, forward/backward using DeviceMotion (Accel, Gyro, Magentic)
- react-native app with redux, only support ios for now

## Firmware for NRF51822

Check: https://github.com/genuine-engineering/ble-arm-mk2-fw

## Install

Please check official react-native project for install react-native

```
git clone https://github.com/genuine-engineering/ble-arm-mk2-app
cd ble-arm-mk2-app
npm install
npm link
react-native run-ios
```

## REMARK

- Please install `rnpm` for automatic link native library
- Package `react-native-motion-manager` is modified version support Device Motion, install direct from https://github.com/tuanpmt/react-native-motion-manager

THIS PROJECT FOR SELF LEARN REACT-NATIVE, AND ON GOING DEVELOPING
