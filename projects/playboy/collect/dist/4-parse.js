"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTattoos = exports.parseCup = exports.parseBorn = exports.parseHair = exports.parseMeasurements = exports.parseWeight = exports.parseEthnicity = exports.parseHeight = void 0;
var date_fns_1 = require("date-fns");
var promises_1 = __importDefault(require("fs/promises"));
var path_1 = require("path");
var db_1 = __importDefault(require("./db"));
exports.parseHeight = function (str) {
    var _a;
    if (!str)
        return null;
    var height = (_a = /\(or (.+) cm\)/.exec(str)) === null || _a === void 0 ? void 0 : _a[1];
    if (!height)
        return 666;
    return parseInt(height, 10);
};
exports.parseEthnicity = function (str) {
    if (!str)
        return null;
    var eth = str;
    if (str === 'Caucaision') {
        eth = 'Caucasian';
    }
    if (str.indexOf('Mixed') > -1 || str.indexOf(',') > -1) {
        eth = 'Mixed';
    }
    return eth;
};
exports.parseWeight = function (str) {
    var _a;
    if (!str)
        return null;
    var weight = (_a = /or (.+) kg/.exec(str)) === null || _a === void 0 ? void 0 : _a[1];
    if (!weight)
        return 666;
    return parseInt(weight, 10);
};
exports.parseMeasurements = function (str) {
    if (!str)
        return null;
    var matches = /(\d\d)([A-Z]?[A-Z])?[- \/]+(\d\d)[- \/](\d\d)/.exec(str);
    if (!matches) {
        return null;
    }
    return {
        bust: +matches[1],
        waist: +matches[3],
        hips: +matches[4],
        cup: matches[2],
    };
};
exports.parseHair = function (str) {
    var e_1, _a;
    if (!str)
        return null;
    var colors = {
        Blonde: ['Blonde'],
        Brunette: ['Brunette', 'Brown', 'Hazel'],
        Black: ['Black'],
        Red: ['Red', 'Redhead'],
        Auburn: ['Auburn'],
    };
    try {
        for (var _b = __values(Object.keys(colors)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var color = _c.value;
            var _d = __read(str.split(/[,;]/), 1), first = _d[0];
            if (colors[color].includes(first))
                return color;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return null;
};
exports.parseBorn = function (str) {
    if (!str)
        return null;
    return date_fns_1.parse(str, "EEEE do 'of' MMMM yyyy", new Date());
};
exports.parseCup = function (str) {
    if (!str)
        return null;
    if (str.length === 1)
        return str;
    var m1 = /(\d\d)?([A-Z]+)/.exec(str);
    if (m1)
        return m1[2];
    return null;
};
exports.parseTattoos = function (str) {
    if (!str)
        return null;
    if (!['None', 'none', 'no'].includes(str))
        return true;
    return false;
};
var cm2in = function (num) { return (num ? num / 2.54 : null); };
var in2cm = function (num) { return (num ? num * 2.54 : null); };
var kg2lb = function (num) { return (num ? num / 0.45359237 : null); };
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    var pool, rows, mates;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pool = db_1.default();
                return [4 /*yield*/, pool.query('select * from playboy.playmates')];
            case 1:
                rows = (_a.sent()).rows;
                mates = rows
                    .map(function (row) {
                    var _a;
                    var bp = row.babepedia;
                    var height = exports.parseHeight(bp === null || bp === void 0 ? void 0 : bp['Height']);
                    var ethnicity = exports.parseEthnicity(bp === null || bp === void 0 ? void 0 : bp['Ethnicity']);
                    var weight = exports.parseWeight(bp === null || bp === void 0 ? void 0 : bp['Weight']);
                    var born = exports.parseBorn(bp === null || bp === void 0 ? void 0 : bp['Born']);
                    var measurements = exports.parseMeasurements(bp === null || bp === void 0 ? void 0 : bp['Measurements']);
                    var cup = exports.parseCup(bp === null || bp === void 0 ? void 0 : bp['Bra/cup size']);
                    return {
                        name: row.name,
                        heightCM: height,
                        heightIN: cm2in(height),
                        weightKG: weight,
                        weightLB: kg2lb(weight),
                        bustIN: measurements === null || measurements === void 0 ? void 0 : measurements.bust,
                        bustCM: in2cm(measurements === null || measurements === void 0 ? void 0 : measurements.bust),
                        waistIN: measurements === null || measurements === void 0 ? void 0 : measurements.waist,
                        waistCM: in2cm(measurements === null || measurements === void 0 ? void 0 : measurements.waist),
                        hipsIN: measurements === null || measurements === void 0 ? void 0 : measurements.hips,
                        hipsCM: in2cm(measurements === null || measurements === void 0 ? void 0 : measurements.hips),
                        cup: (_a = measurements === null || measurements === void 0 ? void 0 : measurements.cup) !== null && _a !== void 0 ? _a : cup,
                        hair: exports.parseHair(bp === null || bp === void 0 ? void 0 : bp['Hair color']),
                        breasts: bp === null || bp === void 0 ? void 0 : bp['Boobs'],
                        ethnicity: ethnicity,
                        born: born,
                        month: row.month,
                        year: row.year,
                        mateAge: born
                            ? date_fns_1.differenceInYears(new Date(row.year, row.month, 1), born)
                            : null,
                        first: row.first,
                    };
                })
                    .sort(function (a, b) {
                    var yr = a.year - b.year;
                    if (yr !== 0)
                        return yr;
                    return a.month - b.month;
                });
                return [4 /*yield*/, promises_1.default.writeFile(path_1.resolve(__dirname, '../../viz/data.json'), JSON.stringify(mates, null, 2))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
run();
//# sourceMappingURL=4-parse.js.map