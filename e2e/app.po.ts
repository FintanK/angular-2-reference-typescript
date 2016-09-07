export class AngularAppReferencePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-app-reference-app h1')).getText();
  }
}
