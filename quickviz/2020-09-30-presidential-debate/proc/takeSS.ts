import puppeteer from 'puppeteer'

async function run() {
  const browser = await puppeteer.launch({ headless: true })

  for (let url of ['http://localhost:1234', 'http://localhost:1234?polar']) {
    const page = await browser.newPage()
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 6000,
    })
    await page.setViewport({ width: 2016, height: 2016 })
    await page.screenshot({
      path: `./ss-${url.includes('polar') ? 'polar' : 'normal'}.png`,
      fullPage: !url.includes('polar'),
    })
    await page.close()
  }

  await browser.close()
}

run()
