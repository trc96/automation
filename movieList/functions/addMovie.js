const { By } = require('selenium-webdriver')

const addMovie = async (driver) => {

    await driver.findElement(By.xpath('//input')).sendKeys('Batman')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()

}

module.exports = {
    addMovie
}