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
exports.MONTHS_FULL = void 0;
var axios_1 = __importDefault(require("axios"));
var bluebird_1 = __importDefault(require("bluebird"));
var db_1 = __importDefault(require("./db"));
var cheerio_1 = __importDefault(require("cheerio"));
exports.MONTHS_FULL = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
var getMate = function (_a) {
    var name = _a.name, year = _a.year, month = _a.month;
    return __awaiter(void 0, void 0, void 0, function () {
        var url, res, $, img, bio, _b, born, birthplace, info, _c, height, weight, bust, waist, hips, zodiac, ethnicity, hair;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    url = "https://mypmates.club/" + year + "/Miss-" + exports.MONTHS_FULL[month] + "/" + name.replaceAll(' ', '-');
                    return [4 /*yield*/, axios_1.default(url)];
                case 1:
                    res = _d.sent();
                    $ = cheerio_1.default.load(res.data);
                    img = $('.playmate-img-main').attr('src');
                    bio = $('.playmate-bio')
                        .first()
                        .text()
                        .match(/She was born on ([A-Za-z]+ \d{1,2}, \d{4}) in (.+)\. She/s);
                    if (!bio) {
                        console.log('NO BIO', name, url);
                        console.log($('.playmate-bio').first().text());
                        console.log('########');
                        return [2 /*return*/];
                    }
                    _b = __read(bio, 3), born = _b[1], birthplace = _b[2];
                    info = $('.col-md-4.border-left')
                        .text()
                        .match(/.+Height: \d ft \d+ in \((\d+) cm\).+Weight: \d+ lb \((\d+) kg\).+Bust: \d+ in \((\d+) cm\).+Waist: \d+ in \((\d+) cm\).+Hips: \d+ in \((\d+) cm\).+Zodiac: ([A-Za-z]+)?.+Ethnicity: ([A-Za-z]+).+Hair: ([A-Za-z]+).+/s);
                    if (!info) {
                        console.log('NO INFO', name, url);
                        console.log($('.col-md-4.border-left').text());
                        console.log('########');
                        return [2 /*return*/];
                    }
                    if (info.length < 2) {
                        console.log('---');
                        console.log($('.col-md-4.border-left').text());
                        console.log('---');
                    }
                    _c = __read(info, 9), height = _c[1], weight = _c[2], bust = _c[3], waist = _c[4], hips = _c[5], zodiac = _c[6], ethnicity = _c[7], hair = _c[8];
                    return [2 /*return*/, {
                            url: url,
                            img: img,
                            born: born,
                            birthplace: birthplace,
                            height: +height,
                            weight: +weight,
                            bust: +bust,
                            waist: +waist,
                            hips: +hips,
                            zodiac: zodiac,
                            ethnicity: ethnicity,
                            hair: hair,
                        }];
            }
        });
    });
};
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    var pool, rows;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pool = db_1.default();
                return [4 /*yield*/, pool.query("select name, year, month from playboy.playmates")];
            case 1:
                rows = (_a.sent()).rows;
                return [4 /*yield*/, bluebird_1.default.map(rows, function (row) { return __awaiter(void 0, void 0, void 0, function () {
                        var playmate, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4 /*yield*/, getMate(row)];
                                case 1:
                                    playmate = _a.sent();
                                    return [4 /*yield*/, pool.query('update playboy.playmates set mypmates=$1 where name=$2', [playmate, row.name])];
                                case 2:
                                    _a.sent();
                                    console.log('done', playmate);
                                    console.log('=========');
                                    return [3 /*break*/, 4];
                                case 3:
                                    err_1 = _a.sent();
                                    console.log('err', err_1, row.name);
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
//# sourceMappingURL=4-mypmates.js.map