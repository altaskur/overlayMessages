"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.channelName = void 0;
const tmi_js_1 = __importDefault(require("tmi.js"));
exports.channelName = 'altaskur';
exports.client = new tmi_js_1.default.Client({
    channels: [exports.channelName]
});
