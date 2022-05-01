// @ts-check
const { test, expect } = require('@playwright/test');
const PageFactory = require('../pageobjects/pagefactory')

test.beforeEach(async ({ page }) => {
  const I = new PageFactory(page);
  await page.setViewportSize({
    width: 1500,
    height: 1080,
  });
  await I.p.navigate(`http://www.lamoda.by/women-home/`);

});

test.describe('LaModa', () => {
  test('should allow to sign up for news', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.fill(I.mainPage.emailField, 'isporova@yandex.ru');
    await I.baseElements.check(I.mainPage.policyAgreement);
    await I.baseElements.click(I.mainPage.buttonForWomen);
    await expect(await page.locator(I.mainPage.confirmOnSubscribe)).toContainText(['Спасибо', 'Письмо с промокодом уже на почте']);

  });

  test('verify changing current location', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.navPanel.locationMenu);
    await I.navPanel.clickLocationByName("г. Молодечно");
    await expect(await page.locator(I.navPanel.chosenLocation)).toContainText('г. Молодечно');

  });


  // не появляется суппорт в автоматическом режиме
  test.skip('verify OnlineConsultant is opened with editable fields', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.hover(I.navPanel.helpingAgent);
    await I.baseElements.click(I.navPanel.helpingAgent);
    await expect(page.locator(I.navPanel.name)).toBeEditable();
    await expect(page.locator(I.navPanel.email)).toBeEditable();
    await expect(page.locator(I.navPanel.textArea)).toBeEditable();

  });


  test('verify Lamoda text has link property', async ({ page }) => {
    const I = new PageFactory(page);
    await expect(await page.locator(I.navPanel.lamoda)).toHaveAttribute('href', "/");

  });

  test('should add item to a cart with name and brand', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.clickFromArray(I.navPanel.menuLinks, 4);
    await I.navPanel.clickByLinkText("Купальники и пляжная одежда");
    await page.waitForURL(I.navPanel.urlToSwimmingSuites);
    let brand = await I.baseElements.textFromArray(I.elements.brand, 15);
    let product = await I.baseElements.textFromArray(I.elements.product, 15);
    await I.baseElements.clickFromArray(I.elements.element, 15);
    await I.baseElements.click(I.detailsPage.chooseSize);
    await I.baseElements.clickFromArray(I.detailsPage.sizes, 1);
    await I.baseElements.click(I.detailsPage.addToCart);
    await expect(await page.locator(I.cartPage.productDetails)).toContainText(brand);
    await expect(await page.locator(I.cartPage.productDetails)).toContainText(product);

  });

  test('should display all umbrellas with discount', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.clickFromArray(I.navPanel.menuLinks, 6);
    await I.navPanel.clickByLinkText("Зонты");
    await I.baseElements.clickFromArray(I.navPanel.filters, 0);
    await I.baseElements.clickFromArray(I.navPanel.selectionsForFilters, 1);
    await I.baseElements.clickFromArray(I.navPanel.otherFilters, 6);
    await page.waitForURL(I.navPanel.urlToUmbrellas);
    let umbrellas = await page.$$(I.elements.element);
    let count = await umbrellas.length;
    await expect(await page.locator(I.elements.discountLabel)).toHaveCount(count);

  });

});








