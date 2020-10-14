"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const got_1 = __importDefault(require("got"));
const parts = [
    'https://www.rev.com/transcript-editor/shared/C-8bDp99BJeCjsjMD_TLZx3mzKMYLQlRNcIpn01gIDIitp25MT_XakH7HIktIkzYjsjgbemzC1JlO5zsFuPOVzteEGE',
    'https://www.rev.com/transcript-editor/shared/Q9Rg-GXXv0j4Lr42SWtShbjYi7XYyidz4UdyhtdMObqUKk7CEp-FSLuVlp1gdJztrCO_rqrjyqj0INo3riGtB9X5rpo',
];
async function retrieve() {
    for (let [i, url] of parts.entries()) {
        const resp = await got_1.default(url);
        const [firstPart, rest] = resp.body.split('model: ');
        const [string, lastPart] = rest.split('authenticated:  false');
        const clean = string.trim().slice(0, -1);
        fs_1.writeFileSync(`./data/part-${i + 1}.json`, clean);
    }
}
retrieve();
//# sourceMappingURL=get-transcript.js.map