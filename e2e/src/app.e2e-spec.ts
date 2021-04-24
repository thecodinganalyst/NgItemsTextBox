import {browser, by, element, logging, protractor} from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should create an item after user hit enter', async () => {
    await page.navigateTo();
    await page.enterInput('hello');
    expect(await page.getInputValue()).toBe('');
    expect(await page.getLiList().count()).toBe(1);
  });

  it('should remove the centre item', async () => {
    await page.navigateTo();
    await page.enterInput('a');
    await page.enterInput('b');
    await page.enterInput('c');
    expect(await page.getLi(2).getText()).toBe('b');
    await page.getLi(2).click();
    expect(await page.getLiList().count()).toBe(2);
  });

  it('should remove the last item', async () => {
    await page.navigateTo();
    await page.enterInput('a');
    await page.enterInput('b');
    await page.enterInput('c');
    await page.getInput().sendKeys(protractor.Key.BACK_SPACE);
    expect(await page.getLiList().count()).toBe(2);
    expect(await page.getLi(1).getText()).toBe('a');
    expect(await page.getLi(2).getText()).toBe('b');
  });

  it('should not remove the last item', async () => {
    await page.navigateTo();
    await page.enterInput('a');
    await page.enterInput('b');
    await page.enterInput('c');
    await page.getInput().sendKeys('a');
    await page.getInput().sendKeys(protractor.Key.BACK_SPACE);
    expect(await page.getLiList().count()).toBe(3);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
