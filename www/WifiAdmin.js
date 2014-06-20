/* 
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

var wifiExport = {};

//get connected AND available wifi
wifiExport.getWifiInfo = function(okcallback, failcallback) {
	cordova.exec(okcallback, failcallback, 'WifiAdmin', 'getWifiInfo', []);
};

// open / close
wifiExport.enableWifi = function(istrue, okcallback, failcallback) {
	cordova.exec(okcallback, failcallback, 'WifiAdmin', 'enableWifi', [ istrue ]);
};

// connect / disconnect
wifiExport.connectWifi = function(istrue, params, okcallback, failcallback) {
	cordova.exec(okcallback, failcallback, 'WifiAdmin', 'connectWifi', [ istrue, params ]);
};

// open / close
wifiExport.enableWifiAP = function(istrue, params, okcallback, failcallback) {
	cordova.exec(okcallback, failcallback, 'WifiAdmin', 'enableWifiAP', [ istrue, params ]);
};

// lock / unlock wifi, keep wifi always on if lock
wifiExport.enableWifiLock = function(istrue, okcallback, failcallback) {
	cordova.exec(okcallback, failcallback, 'WifiAdmin', 'enableWifiLock', [ istrue ]);
};

module.exports = wifiExport;

