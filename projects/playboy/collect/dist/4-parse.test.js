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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _4_parse_1 = require("./4-parse");
var db_1 = __importDefault(require("./db"));
var remeda_1 = require("remeda");
var date_fns_1 = require("date-fns");
var mates;
beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    var pool, rows;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pool = db_1.default();
                return [4 /*yield*/, pool.query('select * from playboy.playmates')];
            case 1:
                rows = (_a.sent()).rows;
                mates = rows;
                return [2 /*return*/];
        }
    });
}); });
test('parseHeight', function () {
    var h = mates.map(function (mate) { var _a; return _4_parse_1.parseHeight((_a = mate === null || mate === void 0 ? void 0 : mate.babepedia) === null || _a === void 0 ? void 0 : _a['Height']); });
    var nulls = h.filter(function (d) { return d == null; });
    var legit = h.filter(function (d) { return d === 666; });
    expect(nulls.length).toBe(18);
    expect(legit.length).toBe(0);
});
test('parseWeight', function () {
    var h = mates.map(function (mate) { var _a; return _4_parse_1.parseWeight((_a = mate === null || mate === void 0 ? void 0 : mate.babepedia) === null || _a === void 0 ? void 0 : _a['Weight']); });
    var nulls = h.filter(function (d) { return d == null; });
    var legit = h.filter(function (d) { return d === 666; });
    expect(nulls.length).toBe(56);
    expect(legit.length).toBe(0);
});
test('parseMeasurements', function () {
    var h = mates.map(function (mate) { var _a; return _4_parse_1.parseMeasurements((_a = mate === null || mate === void 0 ? void 0 : mate.babepedia) === null || _a === void 0 ? void 0 : _a['Measurements']); });
    var nulls = h.filter(function (d) { return d == null; });
    expect(nulls.length).toBe(20);
});
test('parseBorn', function () {
    var h = mates.map(function (mate) { var _a; return _4_parse_1.parseBorn((_a = mate === null || mate === void 0 ? void 0 : mate.babepedia) === null || _a === void 0 ? void 0 : _a['Born']); });
    var nulls = h.filter(function (d) { return d == null; });
    expect(nulls.length).toBe(16);
    var legits = h.filter(function (d) { return d !== null; });
    expect(date_fns_1.isAfter(date_fns_1.min(legits), new Date(1923, 3, 21))).toBe(true);
    expect(date_fns_1.isBefore(date_fns_1.max(legits), new Date(2000, 6, 19))).toBe(true);
});
test('parseCup', function () {
    var h = mates.map(function (mate) { var _a; return _4_parse_1.parseCup((_a = mate === null || mate === void 0 ? void 0 : mate.babepedia) === null || _a === void 0 ? void 0 : _a['Bra/cup size']); });
    var nulls = h.filter(function (d) { return d == null; });
    expect(nulls.length).toBe(33);
    var legits = h.filter(function (d) { return d !== null; });
    expect(remeda_1.uniq(legits)).toMatchInlineSnapshot("\n    Array [\n      \"B\",\n      \"D\",\n      \"C\",\n      \"E\",\n      \"H\",\n      \"DD\",\n      \"A\",\n      \"F\",\n      \"I\",\n    ]\n  ");
});
test('parseTattoos', function () {
    var h = mates.map(function (mate) { var _a; return _4_parse_1.parseTattoos((_a = mate === null || mate === void 0 ? void 0 : mate.babepedia) === null || _a === void 0 ? void 0 : _a['Tattoos']); });
    var nulls = h.filter(function (d) { return d == null; });
    expect(nulls.length).toBe(574);
    var legits = h.filter(function (d) { return d !== null; });
    expect(remeda_1.uniq(legits)).toMatchInlineSnapshot("\n    Array [\n      false,\n      true,\n    ]\n  ");
});
test('parseHair', function () {
    var h = mates.map(function (mate) { var _a; return _4_parse_1.parseHair((_a = mate === null || mate === void 0 ? void 0 : mate.babepedia) === null || _a === void 0 ? void 0 : _a['Hair color']); });
    var nulls = h.filter(function (d) { return d == null; });
    expect(nulls.length).toBe(4);
    var legit = h.filter(function (d) { return d !== null; });
    expect(remeda_1.uniq(legit)).toMatchInlineSnapshot("\n    Array [\n      \"Black\",\n      \"Brunette\",\n      \"Red\",\n      \"Blonde\",\n      \"Auburn\",\n      \"Hazel\",\n    ]\n  ");
});
test('parseEthnicity', function () {
    var h = mates.map(function (mate) { var _a; return _4_parse_1.parseEthnicity((_a = mate === null || mate === void 0 ? void 0 : mate.babepedia) === null || _a === void 0 ? void 0 : _a['Ethnicity']); });
    var nulls = h.filter(function (d) { return d == null; });
    expect(nulls.length).toBe(3);
    var legit = h.filter(function (d) { return d !== null; });
    expect(remeda_1.uniq(legit)).toMatchInlineSnapshot("\n    Array [\n      \"Caucasian\",\n      \"Black\",\n      \"Mixed-race (primarily Black)\",\n      \"Latin\",\n      \"Asian\",\n      \"Other\",\n      \"Mixed-race (primarily Caucasian)\",\n      \"Mixed-race (primarily Middle Eastern)\",\n      \"Mixed-race (primarily Asian)\",\n      \"Mixed-race\",\n      \"South Asian, Black\",\n      \"Mixed-race (primarily Latin)\",\n      \"Caucasian, Latina\",\n      \"Caucasian, Pacific Islander\",\n    ]\n  ");
});
//# sourceMappingURL=4-parse.test.js.map