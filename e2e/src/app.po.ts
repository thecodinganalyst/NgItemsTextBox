import {browser, by, element, ElementArrayFinder, ElementFinder, protractor} from 'protractor';
import {retry} from 'rxjs/operators';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  getInput(): ElementFinder {
    return element(by.tagName('input'));
  }

  async getInputValue(): Promise<string> {
    return this.getInput().getAttribute('value');
  }

  async enterInput(text: string): Promise<void> {
    await this.getInput().sendKeys(text);
    await this.getInput().sendKeys(protractor.Key.ENTER);
  }

  getUl(): ElementFinder {
    return element(by.tagName('ul'));
  }

  getLiList(): ElementArrayFinder {
    return this.getUl().all(by.tagName('li'));
  }

  getLi(index: number): ElementFinder {
    return this.getUl().$('li:nth-child(' + index + ')');
  }
}
