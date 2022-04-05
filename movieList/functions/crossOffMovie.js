const { By } = require('selenium-webdriver')

const crossOffMovie = async (driver) => {
    
    await driver.findElement(By.xpath('//li/span')).click()

    const checked = await driver.findElement(By.css('.checked'))
    expect(checked).toBeTruthy()
}

module.exports = {
    crossOffMovie
}