"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseBadges(badges) {
    const assetsPath = './assets/badges/';
    const badgesTypes = {
        cheer: assetsPath + 'cheer.png',
        gift: assetsPath + 'gift.png',
        host: assetsPath + 'host.png',
        moderator: assetsPath + 'moderator.png',
        prime: assetsPath + 'prime.png',
        subscriber: assetsPath + 'subscriber.png',
        verified: assetsPath + 'verified.png'
    };
    for (const badge in badges) {
        console.log(badge);
    }
}
exports.default = parseBadges;
