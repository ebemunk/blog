import json from '../rev_com_debate_1.json'

const graph = json.draft.nodes

test('all first level nodes are Monologue', () => {
  const firstLevelNodeTypes: { [key: string]: number } = {}
  for (let monologue of graph) {
    const count = firstLevelNodeTypes?.[monologue.type] ?? 0
    firstLevelNodeTypes[monologue.type] = count + 1
  }
  expect(firstLevelNodeTypes).toMatchInlineSnapshot(`
    Object {
      "Monologue": 180,
    }
  `)
})

test('Monologue always has 3 nodes', () => {
  const monologueNodesLength: { [key: string]: number } = {}
  for (let monologue of graph) {
    const len = monologue.nodes.length
    monologueNodesLength[len] = (monologueNodesLength?.[len] ?? 0) + 1
  }
  expect(monologueNodesLength).toMatchInlineSnapshot(`
    Object {
      "3": 180,
    }
  `)
})
