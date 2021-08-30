"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var axios_1 = __importDefault(require("axios"));
var bluebird_1 = __importDefault(require("bluebird"));
var db_1 = __importDefault(require("./db"));
var cheerio_1 = __importDefault(require("cheerio"));
var getBabe = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var slug, res, $, bio;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                slug = (_a = nameCorrection === null || nameCorrection === void 0 ? void 0 : nameCorrection[name]) !== null && _a !== void 0 ? _a : encodeURI(name.replace(' ', '_'));
                return [4 /*yield*/, axios_1.default("https://www.babepedia.com/babe/" + slug)];
            case 1:
                res = _b.sent();
                $ = cheerio_1.default.load(res.data);
                bio = $('#bioarea ul li')
                    .map(function (i, el) {
                    var label = $(el).find('.label').text();
                    var val = $(el).text().replace(label, '');
                    return {
                        key: label.replace(':', '').trim(),
                        val: val.replace(':', '').trim(),
                    };
                })
                    .get();
                return [2 /*return*/, bio
                        .filter(function (d) { return d.key !== 'Achievements'; })
                        .reduce(function (acc, cur) {
                        var _a;
                        return (__assign(__assign({}, acc), (_a = {}, _a[cur.key] = cur.val, _a)));
                    }, {
                        url: "https://www.babepedia.com/babe/" + slug,
                    })];
        }
    });
}); };
var nameCorrection = {
    'Alicia Olivas': 'Alicia_Loraina_Olivas',
    'Daphnée Lynn Duplaix': 'Daphnee_Lynn_Duplaix',
    'Enikő Mihalik': 'Eniko_Mihalik',
    'Ola Ray': 'Ola_Ray_(Playmate)',
    'Jessa Lynn Hinton': 'Jessa_Hinton',
    'Chastity Samone': 'Chasity_Samone',
    'P. J. Lansing': 'P.J._Lansing',
    'Victoria Valentino': 'Victoria_Valentino_%282%29',
};
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    var pool, rows, names;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pool = db_1.default();
                return [4 /*yield*/, pool.query("select name from playboy.playmates")];
            case 1:
                rows = (_a.sent()).rows;
                names = rows.map(function (r) { return r.name; });
                return [4 /*yield*/, bluebird_1.default.map(names, function (name) { return __awaiter(void 0, void 0, void 0, function () {
                        var babe, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4 /*yield*/, getBabe(name)];
                                case 1:
                                    babe = _a.sent();
                                    if (Object.keys(babe).length < 2) {
                                        console.log('=====');
                                        console.log(name);
                                        console.log(babe);
                                        console.log('=====');
                                    }
                                    return [4 /*yield*/, pool.query('update playboy.playmates set babepedia=$1 where name=$2', [babe, name])];
                                case 2:
                                    _a.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    err_1 = _a.sent();
                                    console.log('err', err_1.code, name);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); }, { concurrency: 5 })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
run();
//# sourceMappingURL=3-babepedia.js.map