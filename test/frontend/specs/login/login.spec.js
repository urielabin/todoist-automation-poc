import { expect } from 'chai';
import LoginPage from '../../pages/login.page';
import InboxPage from '../../pages/inbox.page';

require('dotenv').config();

// eslint-disable-next-line no-undef
describe('Todoist Login', () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    LoginPage.open();
  });
  // eslint-disable-next-line no-undef
  it('should login successfully', () => {
    LoginPage.clickLogin();
    browser.switchToFrame(LoginPage.loginIframe);
    LoginPage.fillEmail(`${process.env.EMAIL}`);
    LoginPage.fillPassword(`${process.env.PASSWORD}`);
    LoginPage.submit();
    // eslint-disable-next-line no-unused-expressions
    expect(InboxPage.todoistLogo.waitForDisplayed()).to.be.true;
  });
});
