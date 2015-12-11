$(function(){
  var socket = io.connect('https://floating-depths-5996.herokuapp.com');

  socket.emit('getstatus', {
    status: "ok",
  });

  socket.on('broadcastStatus', function(data){

  if(data.isLive) {
    $(".broaditems").html("");
    data.items.forEach(function(v, i){
      $(".broaditems").append("<span>"+v+"<span>");
    });
    $(".broadcastitems").css("display", "block");
    return;
  }

    $(".broadcastitems").css("display", "none");
    return;
  });
});
