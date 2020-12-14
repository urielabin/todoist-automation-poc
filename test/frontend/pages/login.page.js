import Page from './page';

class LoginPage extends Page {
  get email() {
    return $('#email');
  }
  get password() {
    return $('#password');
  }

  get submitBtn() {
    return $('button.submit_btn');
  }

  get loginBtn() {
    return $('a=Login');
  }

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
