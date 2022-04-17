class BaseElements {

    async click(element) {
        await element.waitForExist({ timeout: 3000 });
        await element.click();
    }

    async setValue(element, text) {
        await element.waitForExist({ timeout: 3000 }); 
        await element.setValue(text);
    }

}

module.exports = new BaseElements ();
