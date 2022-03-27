var express = require("express");
var socket = require("socket.io");
const remote = new SyncStateRemote();
var server = app.listen(8000, function () {
  console.log("listening on port 8000");
});

var io = socket(server);

io.on("connection", async (socket) => {

});
