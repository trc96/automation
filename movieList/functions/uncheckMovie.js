const { By } = require('selenium-webdriver')

const uncheckMovie = async (driver) => {
    
    const unchecked = await driver.findElement(By.xpath('//li/span')).click()

    // const checked = await driver.findElement(By.css('.checked'))
    expect(unchecked).toBeFalsy()
}

module.exports = {
    uncheckMovie
}