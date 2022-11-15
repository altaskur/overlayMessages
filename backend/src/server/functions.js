"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSSE = void 0;
function sendSSE(res, message) {
    console.log('sendSSE: ', message);
    res.write(createMessage(message));
    console.log('Message sent');
}
exports.sendSSE = sendSSE;
function createMessage(data) {
    const body = JSON.stringify(data);
    const header = 'data: ';
    const footer = '\n\n';
    console.log('message: ', header + body + footer);
    return `${header}${body}${footer}`;
}
