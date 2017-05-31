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
const socket = dgram.createSocket({type: 'udp4'});

const mcast = {
    msg  : 'Hello, I am here.',
    ip   : '224.0.0.100',
    port : '5000'
};

const sendMessageMulticast = function () {
    socket.send(mcast.msg, mcast.port, mcast.ip, function (err) {
        if (err) console.error(err);
        console.log('Message sent.');
    });
};

setInterval(sendMessageMulticast, 5000);