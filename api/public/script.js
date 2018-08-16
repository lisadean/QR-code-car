function main() {
  var socket = io();
  socket.on('chat message', function(msg){
    document.querySelector('[data-project]').textContent = msg;
  });
}

main();