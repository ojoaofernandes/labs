/**
 * @author João Fernandes (ojoaofernandes)
 * @date May 31st, 2017
 *
 * @objective
 * Learn multicast in Node.js
 *
 * @details
 * Using Node.js v6.10.3
 */

'use strict';

const dgram  = require('dgram');
const socket = dgram.createSocket({
    type: 'udp4',
    reuseAddr: true // I need this to run multiple listeners
});

const mcast = {
    ip   : '224.0.0.100',
    port : '5000'
};

socket.on('listening', function () {
    console.log('Start listening');
});

socket.on('message', function (msg, rinfo) {
    console.log(msg.toString());
});

socket.on('error', function (error) {
    console.error(error);
    socket.close();
});

socket.bind({port: mcast.port}, function () {
    socket.setMulticastTTL(1)
    socket.addMembership(mcast.ip);
});