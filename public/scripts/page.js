 var socket = null
$(document).ready(function() {
    socket = io();
    socket.on('connect', function(data) {
        socket.emit('join', 'Hello World from client');
    });
});