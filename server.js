// import express from "express";
// import socket from "socket.io";
// import credentials from "./credentials";
// import https from "https";
// import socketServices from "./socketServices";
const express = require("express");
const socket = require("socket.io");
const credentials = require("./credentials");
const http = require("http");
const socketServices = require("./socketServices");

const app = express();
let port;
let server = http.createServer(credentials, app);
port = 69;

app.use(express.static("public"));

const io = socket(server);

io.on("connection", socketServices(io).listen);

server.listen(process.env.PORT || port, function() {
  console.log(`Listening on ${port}`);
});
