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
var promises_1 = require("fs/promises");
var path_1 = require("path");
var loess_1 = __importDefault(require("loess"));
// import data from '../../viz/data.json'
var slices = {
    mateAge: function (d) { return d.mateAge; },
    heightIN: function (d) { return d.heightIN; },
    heightCM: function (d) { return d.heightCM; },
    weightLB: function (d) { return d.weightLB; },
    weightKG: function (d) { return d.weightKG; },
    bustIN: function (d) { return d === null || d === void 0 ? void 0 : d.bustIN; },
    bustCM: function (d) { return d === null || d === void 0 ? void 0 : d.bustCM; },
    waistIN: function (d) { return d === null || d === void 0 ? void 0 : d.waistIN; },
    waistCM: function (d) { return d === null || d === void 0 ? void 0 : d.waistCM; },
    hipsIN: function (d) { return d === null || d === void 0 ? void 0 : d.hipsIN; },
    hipsCM: function (d) { return d === null || d === void 0 ? void 0 : d.hipsCM; },
};
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    var file, raw, data, loessArr;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, promises_1.readFile(path_1.resolve(__dirname, '../../viz/data.json'), 'utf-8')];
            case 1:
                file = _a.sent();
                raw = JSON.parse(file);
                data = raw
                    .map(function (d) { return (__assign(__assign({}, d), { date: new Date(d.year, d.month, 1) })); })
                    .sort(function (a, b) { return a.date.getTime() - b.date.getTime(); });
                loessArr = Object.keys(slices).map(function (key) {
                    var dd = data
                        .filter(function (d) { return !!slices[key](d); })
                        .map(function (d) { return [new Date(d.year, d.month, 1).getTime(), slices[key](d)]; });
                    var model = new loess_1.default({
                        x: dd.map(function (d) { return d[0]; }),
                        y: dd.map(function (d) { return d[1]; }),
                    }, { band: 0.2 });
                    var smooth = model.predict();
                    return {
                        key: key,
                        loess: { fitted: smooth.fitted, halfwidth: smooth.halfwidth },
                    };
                });
                return [4 /*yield*/, promises_1.writeFile(path_1.resolve(__dirname, '../../viz/loess.json'), JSON.stringify(loessArr, null, 2))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
run();
//# sourceMappingURL=5-analyse.js.map