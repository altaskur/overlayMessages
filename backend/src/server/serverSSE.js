"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const config_1 = require("../tmi/config");
const express_1 = __importDefault(require("express"));
const functions_1 = require("./functions");
exports.app = (0, express_1.default)();
// app.use('/', express.static('../../../frontend/index.html'))
exports.app.get('/sse', (req, res) => {
    var _a;
    const headers = {
        'Content-Type': 'text/event-stream',
        Connection: 'keep-alive',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
    };
    res.writeHead(200, headers);
    config_1.client.on('connecting', () => {
        (0, functions_1.sendSSE)(res, 'Connecting to channel');
    });
    config_1.client.on('connected', () => {
        (0, functions_1.sendSSE)(res, `Connected to ${config_1.channelName}'s chat`);
    });
    (_a = res.socket) === null || _a === void 0 ? void 0 : _a.on('end', (e) => {
        console.log('event source closed');
        res.end();
    });
    // res.on('close', () => {
    //   console.log(' Close connection .. ... ...')
    //   res.end()
    //   // Ver como cerrar tmi
    //   client.disconnect()
    // })
    config_1.client.on('message', (channel, tags, message, self) => {
        tags.color = tags.color === null ? '#b448d3' : tags.color;
        const data = {
            mod: tags.mod,
            vip: tags.vip,
            subscriber: tags.subscriber,
            emoteOnly: tags.emoteOnly,
            messageType: tags['message-type'],
            color: tags.color,
            badges: tags.badges,
            nickName: tags['display-name'],
            message,
            tags: {}
        };
        (0, functions_1.sendSSE)(res, data);
    });
    // setInterval(() => {
    //   sendSSE(res, 'Mensaje random')
    // }, 1000)
});
