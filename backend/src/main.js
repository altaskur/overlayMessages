"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./tmi/config");
const serverSSE_1 = require("./server/serverSSE");
serverSSE_1.app.listen(5173, () => {
    console.log('Server started on port 5173');
});
config_1.client.connect();
