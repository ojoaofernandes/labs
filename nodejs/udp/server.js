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

const dgram  = require('dgram');
const server = dgram.createSocket({type: 'udp4'});

const getDate = function () {
    const date = new Date();
    const str  = date.toString();
    return str.substr(4, str.length - 20);
};

const messageInspect = function (msg, rinfo) {
    const sender = `${rinfo.address}:${rinfo.port}`;
    const date   = getDate();

    console.log('');
    console.log('New message received.');
    console.log(`When: \t\t${date}`);
    console.log(`From: \t\t${sender}`);
    console.log(`Content: \t${msg.toString()}`);
};

server.on('listening', function () {
    const address = server.address();
    console.log(`Server listening ${address.address}:${address.port}`);
});

server.on('message', function (msg, rinfo) {
    messageInspect(msg, rinfo);

    const reply = 'Server says: Hello!';
    server.send(reply, 0, reply.length, rinfo.port, rinfo.address, function () {
        console.log('The message was replied!');
    });
});

server.on('error', function (error) {
    console.error(error);
    server.close();
});

server.on('close', function () {
    console.log('Server stopped.');
});

server.bind({
    address: 'localhost',
    port: 5000
});