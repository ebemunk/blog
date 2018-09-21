### Default

```jsx
const d3 = require('d3')

const random = d3.randomNormal(0, 2)
const randomData = d3.range(0, 8).map(d => ({
  key: `${d}`,
  value: random(),
}))

class Default extends React.Component {
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
          data={randomData}
        />
      </React.Fragment>
    )
  }
}

;<Default />
```

### Customized

```jsx
const d3 = require('d3')

const random = d3.randomNormal(0, 2)
const randomData = () =>
  d3.range(0, 8).map(d => ({
    key: `${d}`,
    value: random(),
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
