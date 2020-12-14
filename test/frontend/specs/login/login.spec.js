import { expect } from 'chai';
import LoginPage from '../../pages/login.page';
import InboxPage from '../../pages/inbox.page';

require('dotenv').config();

describe('Todoist Login', () => {
  beforeEach(() => {
    LoginPage.open();
  });
  it('should login successfully', () => {
    LoginPage.clickLogin();
    browser.switchToFrame(LoginPage.loginIframe);
    LoginPage.fillEmail(`${process.env.EMAIL}`);
    LoginPage.fillPassword(`${process.env.PASSWORD}`);
    LoginPage.submit();

    expect(InboxPage.todoistLogo.waitForDisplayed()).to.be.true;
  });
});
