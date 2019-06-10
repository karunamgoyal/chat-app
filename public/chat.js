// make connection

var socket = io.connect('http://localhost:4000');

// Query DOM

var messsage = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');
// emit Events

btn.addEventListener('click',function(){
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    })
});

message.addEventListener('keypress',function(){
    socket.emit('typing',handle.value);
});
// listen for events

socket.on('chat',function(data){

    output.innerHTML+="<p><strong>" + data.handle + ": </strong>" + data.message +"</p> <br>"; 
});

socket.on('typing',function(data){
    feedback.innerHTML= "<p><i>"+data+ " is typing... </i></p> " ;
});