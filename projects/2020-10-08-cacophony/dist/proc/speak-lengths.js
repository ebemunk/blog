"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const part_1_json_1 = __importDefault(require("../data/part-1.json"));
const part_2_json_1 = __importDefault(require("../data/part-2.json"));
const util_1 = require("../util");
const lengths = {};
let lastTimestampEnd = 0;
for (let monologue of part_1_json_1.default.draft.nodes) {
    const speakerId = monologue.nodes[0].data.speakerId;
    // @ts-ignore
    const speaker = util_1.speakerName(part_1_json_1.default.draft.speakerMap[speakerId].name);
    const ranges = [];
    // @ts-ignore
    for (let ts of monologue.nodes[2].data.Timestamps) {
        ranges.push([ts.Start, ts.End]);
        lastTimestampEnd = Math.max(ts.End, lastTimestampEnd);
    }
    if (!Array.isArray(lengths[speaker]))
        lengths[speaker] = [];
    lengths[speaker].push(...ranges);
}
for (let monologue of part_2_json_1.default.draft.nodes) {
    if (monologue.type === 'SplitJobMonologue') {
        continue;
    }
    // @ts-ignore
    const speakerId = monologue.nodes[0].data.speakerId;
    // @ts-ignore
    const speaker = util_1.speakerName(part_2_json_1.default.draft.speakerMap[speakerId].name);
    const ranges = [];
    // @ts-ignore
    for (let ts of monologue.nodes[2].data.Timestamps) {
        ranges.push([lastTimestampEnd + ts.Start, lastTimestampEnd + ts.End]);
    }
    lengths[speaker].push(...ranges);
}
for (let speaker in lengths) {
    lengths[speaker] = collapseRanges(lengths[speaker]);
}
const fs_1 = require("fs");
fs_1.writeFileSync('./data/speechLen.json', JSON.stringify(lengths));
function collapseRanges(ranges) {
    const collapsed = [];
    let lastEnd = 0;
    for (let range of ranges) {
        if (lastEnd === 0) {
            collapsed.push(range);
            lastEnd = range[1];
            continue;
        }
        if (range[0] < lastEnd + 2000) {
            collapsed[collapsed.length - 1][1] = range[1];
            lastEnd = range[1];
            continue;
        }
        collapsed.push(range);
        lastEnd = range[1];
    }
    return collapsed;
}
//# sourceMappingURL=speak-lengths.js.map