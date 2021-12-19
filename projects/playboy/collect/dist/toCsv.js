"use strict";
// @ts-nocheck
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
var promises_1 = __importDefault(require("fs/promises"));
var d3 = __importStar(require("d3"));
var remeda_1 = require("remeda");
var json = require(__dirname + '/../../viz/data.json');
function toCsv() {
    return __awaiter(this, void 0, void 0, function () {
        var data, csv;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = json
                        .map(function (d) {
                        return remeda_1.omit(d, [
                            'heightIN',
                            'weightLB',
                            'bustIN',
                            'waistIN',
                            'hipsIN',
                            'cup',
                            'babepediaUrl',
                            'mypmatesUrl',
                            'country',
                            'state',
                            'town',
                        ]);
                    })
                        .map(function (d) { return (__assign(__assign({}, d), { hair: ['Blond', 'Black', 'Brown', 'Red'].indexOf(d.hair), breasts: ['Real/Natural', 'Fake/Enhanced'].indexOf(d.breasts), ethnicity: ['Caucasian', 'Black', 'Asian', 'Latin'].indexOf(d.ethnicity), born: new Date(d.born).getTime() })); });
                    data = calcAverage(data);
                    csv = d3.csvFormat(data);
                    return [4 /*yield*/, promises_1.default.writeFile(__dirname + '/../../viz/data.csv', csv)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function calcAverage(data) {
    var normalizer = function (accessor) {
        return d3.scaleLinear().domain(d3.extent(data, accessor)).range([0, 1]);
    };
    var normalizedData = data.map(function (d) { return (__assign(__assign({}, d), { bustCMNorm: normalizer(function (d) { return d.bustCM; })(d.bustCM), waistCMNorm: normalizer(function (d) { return d.waistCM; })(d.waistCM), hipsCMNorm: normalizer(function (d) { return d.hipsCM; })(d.hipsCM), heightCMNorm: normalizer(function (d) { return d.heightCM; })(d.heightCM), weightKGNorm: normalizer(function (d) { return d.weightKG; })(d.weightKG), mateAgeNorm: normalizer(function (d) { return d.mateAge; })(d.mateAge) })); });
    var categoricalAverage = function (accessor) {
        return d3.groups(data, accessor).map(function (_a) {
            var _b = __read(_a, 2), k = _b[0], v = _b[1];
            return [k, v.length / data.length];
        });
    };
    var categoricalAvgs = {
        hair: categoricalAverage(function (d) { return d.hair; }),
        ethnicity: categoricalAverage(function (d) { return d.ethnicity; }),
        breasts: categoricalAverage(function (d) { return d.breasts; }),
    };
    var average = [
        d3.mean(normalizedData, function (d) { return d.bustCMNorm; }),
        d3.mean(normalizedData, function (d) { return d.waistCMNorm; }),
        d3.mean(normalizedData, function (d) { return d.hipsCMNorm; }),
        d3.mean(normalizedData, function (d) { return d.heightCMNorm; }),
        d3.mean(normalizedData, function (d) { return d.weightKGNorm; }),
        d3.mean(normalizedData, function (d) { return d.mateAgeNorm; }),
        categoricalAvgs.hair[0][1],
        categoricalAvgs.ethnicity[0][1],
        categoricalAvgs.breasts[0][1],
    ];
    return normalizedData.map(function (d, i) {
        var distance = Math.sqrt(Math.pow(average[0] - d.bustCMNorm, 2) +
            Math.pow(average[1] - d.waistCMNorm, 2) +
            Math.pow(average[2] - d.hipsCMNorm, 2) +
            Math.pow(average[3] - d.heightCMNorm, 2) +
            Math.pow(average[4] - d.weightKGNorm, 2) +
            Math.pow(average[5] - d.mateAgeNorm, 2) +
            Math.pow(average[6] - categoricalAvgs.hair[d.hair][1], 2) +
            Math.pow(average[7] - categoricalAvgs.ethnicity[d.ethnicity][1], 2) +
            Math.pow(average[8] - categoricalAvgs.breasts[d.breasts][1], 2));
        return remeda_1.omit(__assign(__assign({}, d), { avgDist: distance.toFixed(3) }), [
            'bustCMNorm',
            'waistCMNorm',
            'hipsCMNorm',
            'heightCMNorm',
            'weightKGNorm',
            'mateAgeNorm',
        ]);
    });
}
toCsv();
//# sourceMappingURL=toCsv.js.map