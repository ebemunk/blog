"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const d3_array_1 = require("d3-array");
const speechLen_json_1 = __importDefault(require("../data/speechLen.json"));
const util_1 = require("../util");
const maxLen = d3_array_1.max(
// @ts-ignore
Object.keys(speechLen_json_1.default).flatMap(key => speechLen_json_1.default[key].flatMap(d => d)));
const seconds = d3_array_1.range(0, maxLen, 1000).reduce((obj, cur) => ({ ...obj, [Math.floor(cur / 1000)]: new Set() }), {});
for (let name in speechLen_json_1.default) {
    // @ts-ignore
    for (let msRange of speechLen_json_1.default[name]) {
        let sRange = d3_array_1.range(Math.floor(msRange[0] / 1000), Math.floor(msRange[1] / 1000), 1);
        if (sRange.length < 1) {
            sRange = [Math.floor(msRange[0] / 1000), Math.floor(msRange[1] / 1000)];
        }
        for (let second of sRange) {
            seconds[second].add(util_1.speakerNameToId(name));
        }
    }
}
const secondsJson = {};
for (let set in seconds) {
    secondsJson[set] = Array.from(seconds[set]);
}
fs_1.writeFileSync('./data/per-second-speech.json', JSON.stringify(secondsJson));
//# sourceMappingURL=per-second-speech.js.map