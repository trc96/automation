const { Builder, Capabilities } = require('selenium-webdriver')

// const { search } = require('./search')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { addMovie } = require('../functions/addMovie')
const { deleteMovie } = require('../functions/deleteMovie')
const { crossOffMovie } = require('../functions/crossOffMovie')
const { uncheckMovie } = require('../functions/uncheckMovie')


beforeAll (async () => {
    await (await driver).get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll (async () => {
    await (await driver).quit()
})

test ('Add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(2000)
})

test ('Cross off a movie', async () => {
    await crossOffMovie(driver)
    await driver.sleep(2000)
})

test ('Uncheck a checked movie', async () => {
    await uncheckMovie(driver)
    await driver.sleep(2000)
})

test ('Delete a movie', async () => {
    await deleteMovie(driver)
    await driver.sleep(2000)
})