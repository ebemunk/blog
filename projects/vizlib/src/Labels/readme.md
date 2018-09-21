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
        <Labels
          title="World Crop Resources (2018)"
          left="Crop thingies (km/s)"
          right="Didgeridoos (kt)"
          top="Nonexistant Axis (na/s)"
          bottom="Lucky Number (trillions)"
        >
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
        </Labels>
      </React.Fragment>
    )
  }
}

;<Default />
```
