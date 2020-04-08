import Page from './page';

class LoginPage extends Page {
  // eslint-disable-next-line class-methods-use-this
  get email() {
    return $('#email');
  }

  // eslint-disable-next-line class-methods-use-this
  get password() {
    return $('#password');
  }

  // eslint-disable-next-line class-methods-use-this
  get submitBtn() {
    return $('button.submit_btn');
  }

  // eslint-disable-next-line class-methods-use-this
  get loginBtn() {
    return $('a=Login');
  }

  // eslint-disable-next-line class-methods-use-this
  get loginIframe() {
    return $('iframe._3ga5X');
  }

  open() {
    super.open();
  }

  clickLogin() {
    this.loginBtn.waitForEnabled();
    this.loginBtn.click();
  }

  fillEmail(email) {
    this.email.waitForEnabled();
    this.email.setValue(email);
  }

  fillPassword(password) {
    this.password.waitForEnabled();
    this.password.setValue(password);
  }

  submit() {
    this.submitBtn.click();
  }

  switchToLoginIframe() {
    this.browser.switchToFrame(this.loginIframe);
  }
}

export default new LoginPage();
