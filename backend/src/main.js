"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./tmi/config");
const serverSSE_1 = require("./server/serverSSE");
const port = 5174;
serverSSE_1.app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
config_1.client.connect();
