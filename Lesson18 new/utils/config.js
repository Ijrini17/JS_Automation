async function settings ()

{
    await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.manage().window().setRect({ width: 1400, height: 626 });

}

module.exports = settings