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
exports.app.use('/', express_1.default.static('./frontend/'));
exports.app.get('/sse', (req, res) => {
    const headers = {
        'Content-Type': 'text/event-stream',
        Connection: 'keep-alive',
        'Cache-Control': 'no-cache'
    };
    res.writeHead(200, headers);
    config_1.client.on('connecting', () => {
        (0, functions_1.sendSSE)(res, 'Connecting to channel');
    });
    config_1.client.on('connected', () => {
        (0, functions_1.sendSSE)(res, `Connected to ${config_1.channelName}'s chat`);
    });
    config_1.client.on('message', (channel, tags, message, self) => {
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
});
