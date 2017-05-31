/**
 * @author João Fernandes (ojoaofernandes)
 * @date May 31st, 2017
 *
 * @objective
 * Learn basic UDP in Node.js
 *
 * @details
 * Using Node.js v6.10.3
 */

'use strict';

const dgram   = require('dgram');
const client  = dgram.createSocket({type: 'udp4'});
const server  = {address: 'localhost', port: 5000};
const message = Buffer.from('Hello.');
let timer;

client.send(message, 0, message.length, server.port, server.address, function () {
    console.log('Message sent!');
    timer = setTimeout(function () {
        console.log('Server did not respond on time.');
        client.close();
    }, 5000);
});

client.on('message', function (msg, rinfo) {
    console.log(msg.toString());
    clearTimeout(timer);
    client.close();
});
