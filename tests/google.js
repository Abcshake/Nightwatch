module.exports = {
    '@tags' : ['google'],
    'Google advanced search: Elton John'(browser){
        const mainQueryInputSelector = 'input[name="as_q"]';
        const mainQuery = 'Elton John';
        const languageDropdownOpenerSelect = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_ru"]';
        const updateDropdownOpenSelect = '#as_qdr_button';
        const updateDropdownValueSelector = '.goog-menuitem[value="m"]';
        const submitButtonSelector = '.jfk-button[type="submit"]';
        browser
            .url('https://www.google.ca/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelect)
            .click(languageDropdownValueSelector)
            .click(updateDropdownOpenSelect)
            .click(updateDropdownValueSelector)
            .click(submitButtonSelector)
            .assert.urlContains('as_q=Elton John','Query is Elton John')
            .saveScreenshot('tests_output/google.png')

    }
}

