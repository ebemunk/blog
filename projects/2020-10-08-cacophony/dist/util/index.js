"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMargins = exports.formatPct = exports.formatSec = exports.colorScaleById = exports.colorScaleByName = exports.msToString = exports.pad = exports.speakerNameToId = exports.speakerIdToName = exports.speakerIds = exports.speakerName = void 0;
const d3_format_1 = require("d3-format");
const d3_scale_1 = require("d3-scale");
function speakerName(name) {
    if (name.includes('Trump'))
        return 'Trump';
    if (name.includes('Biden'))
        return 'Biden';
    if (name.includes('Wallace'))
        return 'Wallace';
    return 'None';
}
exports.speakerName = speakerName;
exports.speakerIds = {
    Trump: 0,
    Biden: 1,
    Wallace: 2,
};
exports.speakerIdToName = {
    0: 'Trump',
    1: 'Biden',
    2: 'Wallace',
};
function speakerNameToId(name) {
    if (name.includes('Trump'))
        return 0;
    if (name.includes('Biden'))
        return 1;
    if (name.includes('Wallace'))
        return 2;
    return -1;
}
exports.speakerNameToId = speakerNameToId;
function pad(number) {
    if (number < 10)
        return `0${number}`;
    return `${number}`;
}
exports.pad = pad;
function msToString(ms) {
    var d = new Date(ms);
    const h = d.getUTCHours();
    const m = d.getUTCMinutes();
    const s = d.getUTCSeconds();
    if (!h && !m && !s)
        return '';
    return pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes());
}
exports.msToString = msToString;
exports.colorScaleByName = d3_scale_1.scaleOrdinal()
    .domain(['Trump', 'Biden', 'Wallace'])
    .range(['#E81B23', '#3333FF', '#B1AB99']);
exports.colorScaleById = d3_scale_1.scaleOrdinal()
    .domain(['0', '1', '2'])
    .range(['#E81B23', '#3333FF', '#B1AB99']);
exports.formatSec = (sec) => {
    const d = new Date(sec * 1000);
    const m = d.getUTCMinutes();
    const s = d.getUTCSeconds();
    if (!m)
        return `${s} sec.`;
    if (!s)
        return `${m} min.`;
    return `${m}m ${s}s`;
};
exports.formatPct = d3_format_1.format('.2p');
exports.defaultMargins = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
};
//# sourceMappingURL=index.js.map