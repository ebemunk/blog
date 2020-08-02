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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var wtf_wikipedia_1 = __importDefault(require("wtf_wikipedia"));
var R = __importStar(require("remeda"));
var bluebird_1 = __importDefault(require("bluebird"));
var db_1 = __importDefault(require("./db"));
var remeda_1 = require("remeda");
// const years = R.range(1954, 2020).map(
var years = R.range(1964, 1965).map(function (year) { return "List of Playboy Playmates of " + year; });
var doYear = function (year) { return __awaiter(void 0, void 0, void 0, function () {
    var doc, infoboxes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, wtf_wikipedia_1.default.fetch(year)];
            case 1:
                doc = _a.sent();
                infoboxes = doc === null || doc === void 0 ? void 0 : doc.infoboxes();
                if (!infoboxes) {
                    throw new Error('infoboxes empty');
                }
                return [2 /*return*/, infoboxes.map(function (box) {
                        var json = box.json();
                        return Object.keys(json).reduce(function (obj, key) {
                            var _a;
                            return (__assign(__assign({}, obj), (_a = {}, _a[key] = json[key].text, _a.year = year, _a)));
                        }, {});
                    })];
        }
    });
}); };
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    var infos, pool;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bluebird_1.default.map(years, doYear)];
            case 1:
                infos = _a.sent();
                pool = db_1.default();
                // console.log('infos', infos)
                return [4 /*yield*/, bluebird_1.default.map(remeda_1.flatten(infos), function (info) { return __awaiter(void 0, void 0, void 0, function () {
                        var name, nameArr, _i, nameArr_1, n, res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    name = info.name;
                                    nameArr = [name];
                                    if (names[name])
                                        nameArr = [names[name]];
                                    else if (multiples[name])
                                        nameArr = multiples[name];
                                    if (!name) {
                                        // @ts-ignore
                                        console.log('!name', name, info.year);
                                    }
                                    _i = 0, nameArr_1 = nameArr;
                                    _a.label = 1;
                                case 1:
                                    if (!(_i < nameArr_1.length)) return [3 /*break*/, 5];
                                    n = nameArr_1[_i];
                                    return [4 /*yield*/, pool.query("select * from playboy.playmates where name='" + n + "'")];
                                case 2:
                                    res = _a.sent();
                                    if (res.rowCount < 1) {
                                        console.log('no rows');
                                    }
                                    return [4 /*yield*/, pool.query('update playboy.playmates set wiki=$1 where name=$2', [
                                            info,
                                            n,
                                        ])];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4:
                                    _i++;
                                    return [3 /*break*/, 1];
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                // console.log('infos', infos)
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var names = {
    'Marilyn Walts (aka Margaret Scott)': 'Marilyn Walts',
    'Marilyn Walts\n( Margaret Scott)': 'Marilyn Walts',
    'Jean Moorhead': 'Jean Moorehead',
    'Elsa Sorensen': 'Elsa Sorensen',
    'Pamela Gordon': 'Pamela Anne Gordon',
    'Kelli Burke': 'Kelly Burke',
    'P.J. Lansing': 'P. J. Lansing',
    'Lena Forsén': 'Lenna Sjooblom',
    'Cynthia Wood': 'Cyndi Wood',
    'Jeane (Jean) Manson': 'Jean Manson',
    'Ingeborg Sørensen': 'Ingeborg Sorensen',
    'Patricia McClain': 'Patricia Margot McClain',
    'Pamela Bryant': 'Pamela Jean Bryant',
    'Susan Kiger': 'Susan Lynn Kiger',
    'Vicky McCarty': 'Vicki McCarty',
    'Vicki Lasseter': 'Vicki Lynn Lasseter',
    'Debi Nicolle Johnson': 'Debi Johnson',
    'Julie Michelle McCullough': 'Julie McCullough',
    'Laurie Ann Carr': 'Laurie Carr',
    'Pam Stein': 'Pamela Stein',
    'Katariina Souri': 'Kata Kärkkäinen',
    'Jennifer Lyn Jackson': 'Jennifer Jackson',
    'Laurie Jo Wood': 'Laurie Wood',
    'Stacy Arthur': 'Stacy Leigh Arthur',
    'Carrie Yazel': 'Carrie Jean Yazel',
    'cady cantrell': 'Cady Cantrell',
    'Jennifer Leroy': 'Jennifer LeRoy',
    'Stacy Elizabeth Sanches': 'Stacy Sanches',
    'Kelly Gallagher\n(now known as Kelly Wearstler)': 'Kelly Gallagher',
    'Cynthia Gwyn Brown': 'Cynthia Brown',
    'Rachel Jéan Marteen': 'Rachel Jean Marteen',
    'Karin Katherine Taylor': 'Karin Taylor',
    'Nikki Ziering': 'Nikki Schieler',
    'Linn Thomas': 'Lynn Thomas',
    'Nicole, Erica and Jaclyn Dahm': 'Dahm triplets',
    'Melissa Deanne Holliday': 'Melissa Holliday',
    'Lexie Karlsen': 'Alexandria Karlsen',
    'Stacy Fuson': 'Stacy Marie Fuson',
    'Teri Marie Harrison': 'Teri Harrison',
    'Tina Marie Jordan': 'Tina Jordan',
    'Markéta Jánská': 'Marketa Janska',
    'Pennelope M. Jimenez': 'Pennelope Jimenez',
    'Pilar M. Lastra': 'Pilar Lastra',
    'Rebecca Anne Ramos': 'Rebecca Ramos',
    'Lindsey Gayle Evans': 'Lindsey Evans',
    'Shanna Marie McLaughlin': 'Shanna McLaughlin',
    'Jessa Hinton': 'Jessa Lynn Hinton',
    'Olga De Mar': 'Olga de Mar',
};
var multiples = {
    'Deisy and Sarah Teles': ['Deisy Teles', 'Sarah Teles'],
    'Karen and Mirjam van Breeschooten': [
        'Karin van Breeschooten',
        'Mirjam van Breeschooten',
    ],
    'Jennifer and Natalie Jo Campbell': ['Jennifer Campbell', 'Natalie Campbell'],
    'Kristina and Karissa Shannon': ['Kristina Shannon', 'Karissa Shannon'],
    'Carol and Darlene Bernaola': ['Carol Bernaola', 'Darlene Bernaola'],
};
run();
//# sourceMappingURL=lists.js.map