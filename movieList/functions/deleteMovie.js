const { By } = require('selenium-webdriver')

const deleteMovie = async (driver) => {

    const movie = 'Batman'
    
    const movieText = await driver.findElement(By.xpath('//li/span')).getText()
    
    expect(movieText).toEqual(movie)
    
    await driver.findElement(By.xpath('//li/button')).click()
}

module.exports = {
    deleteMovie
}