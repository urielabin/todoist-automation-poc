export default class Page {
  constructor() {
    this.title = 'My Page';
  }

  // eslint-disable-next-line class-methods-use-this
  open() {
    browser.maximizeWindow();
    browser.url('/');
  }
}
