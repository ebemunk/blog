BarChart draws a bar chart.

### Default

```jsx
const d3 = require('d3')

const random = d3.randomUniform(10)
const randomData = d3.range(0, 8).map(d => ({
  key: `Day ${d}`,
  value: random(),
}))

const Default = () => (
  <BarChart
    padding={{
      bottom: 25,
      left: 25,
      top: 25,
      right: 25,
    }}
    height={400}
    width={600}
    data={randomData}
  />
)
;<Default />
```

### Customized

```jsx
const d3 = require('d3')

const random = d3.randomNormal(0, 2)
const randomCategories = d3.randomUniform(3, 10)
const randomData = () =>
  d3.range(0, randomCategories()).map(d => ({
    key: `${d}`,
    value: randomCategories(),
  }))

class Update extends React.Component {
  constructor() {
    this.state = {
      data: randomData(),
      horizontal: false,
    }
  }

  render() {
    return (
      <React.Fragment>
        <BarChart
          padding={{
            bottom: 25,
            left: 25,
            top: 25,
            right: 25,
          }}
          height={400}
          width={600}
          data={this.state.data}
          horizontal={this.state.horizontal}
        />
        <button onClick={() => this.setState({ data: randomData() })}>
          Update
        </button>
        <button
          onClick={() => this.setState({ horizontal: !this.state.horizontal })}
        >
          Direction
        </button>
      </React.Fragment>
    )
  }
}

;<Update />
```

### Styled

```jsx
const d3 = require('d3')

const colors = ['red', 'green', 'blue']
const random = d3.randomUniform(25, 100)
const randomData = d3.range(0, 3).map(d => ({
  key: `${d}`,
  value: Math.abs(random()),
}))

const Default = () => (
  <BarChart
    padding={{
      bottom: 0,
      left: 20,
      top: 10,
      right: 0,
    }}
    height={150}
    width={75}
    data={randomData}
    linearAxisProps={{
      tickValues: [d3.max(randomData, d => d.value)],
      tickSize: 3,
    }}
    bandAxisProps={{
      ticks: 0,
    }}
    barStyle={d => ({
      fill: colors[d.key],
    })}
  />
)
;<Default />
```
