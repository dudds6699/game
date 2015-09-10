 var socket = null;
 var userName = null;
$(document).ready(function() {
    socket = io();
    socket.on('connect', function(data) {
        //socket.emit('join', 'Hello World from client');
        
        if (userName === null){
            $('#myModal').modal('show');
        }
    });
    
    
    $('.btn-primary').on('click', function(d){
        if($('#user').val() !== ""){
            socket.emit('user', $('#user').val());
             $('#myModal').modal('hide');
        }
    });
    
});