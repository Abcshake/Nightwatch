module.exports = {
    'Register for NOP commerce'(browser){
        const registerButton =  'a[class="ico-register"]';
        const selectGenderMale = 'input[value="M]';
        const firstNameField = 'input[id="FirstName"]';
        const firstName = "Avi";
        browser
            .url('https://demo.nopcommerce.com/')
            .waitForElementVisible('.ico-register')
            .assert.containsText(registerButton, "Register")
            .click(registerButton)
            .click(selectGenderMale)
            .assert.containsText(".page-title","Register")
            .setValue(firstNameField,firstName)
            

    }
}