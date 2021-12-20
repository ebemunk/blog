"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rev_com_debate_1_json_1 = __importDefault(require("../rev_com_debate_1.json"));
const graph = rev_com_debate_1_json_1.default.draft.nodes;
test('all first level nodes are Monologue', () => {
    var _a;
    const firstLevelNodeTypes = {};
    for (let monologue of graph) {
        const count = (_a = firstLevelNodeTypes === null || firstLevelNodeTypes === void 0 ? void 0 : firstLevelNodeTypes[monologue.type]) !== null && _a !== void 0 ? _a : 0;
        firstLevelNodeTypes[monologue.type] = count + 1;
    }
    expect(firstLevelNodeTypes).toMatchInlineSnapshot(`
    Object {
      "Monologue": 180,
    }
  `);
});
test('Monologue always has 3 nodes', () => {
    var _a;
    const monologueNodesLength = {};
    for (let monologue of graph) {
        const len = monologue.nodes.length;
        monologueNodesLength[len] = ((_a = monologueNodesLength === null || monologueNodesLength === void 0 ? void 0 : monologueNodesLength[len]) !== null && _a !== void 0 ? _a : 0) + 1;
    }
    expect(monologueNodesLength).toMatchInlineSnapshot(`
    Object {
      "3": 180,
    }
  `);
});
//# sourceMappingURL=schema-check.test.js.map