module.exports = {
    '@tags' : ['google'],
    'Google advanced search: Elon Musk'(browser){
        const mainQueryInputSelector = 'input[name="as_q"]';
        const mainQuery = 'Elon Musk';
        const languageDropdownOpenerSelect = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
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
            .assert.urlContains('as_q=Elon+Musk','Query is Elon Musk')
            .saveScreenshot('tests_output/google.png')

    }
}