export default class Page {
  constructor() {
    this.title = 'My Page';
  }

  open() {
    browser.maximizeWindow();
    browser.url('/');
  }
}
