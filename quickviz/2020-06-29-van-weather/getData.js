const axios = require('axios')
const R = require('ramda')
const fs = require('fs').promises

const getData = async () => {
  const years = R.range(2009, 2021)

  const nums = []
  for (let year of years) {
    const { data } = await axios.get(
      `https://vancouver.weatherstats.ca/data/rain-daily.js?key=wd01&refresh_count=3&browser_zone=Pacific%20Daylight%20Time&dataset_size=10x&date=${year}-07-01`,
    )
    const series = eval(
      /google.visualization.Query.setResponse(.+)/.exec(data)[1],
    )
      .table.rows.map(row => [row.c[0].v, row.c[1].v])
      .filter(d => d[0] > new Date(year, 4, 0))
      .map(d => [d[0].toISOString().split('T')[0], d[1]])

    nums.push(...series)
  }

  console.log(nums)
  nums.unshift(['Date', 'Precipitation'])

  await fs.writeFile(
    './van-precipitation.csv',
    nums.map(d => d.join(',')).join('\n'),
  )
}

getData()
