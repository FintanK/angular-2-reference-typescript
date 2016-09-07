import { AngularAppReferencePage } from './app.po';

describe('angular-app-reference App', function() {
  let page: AngularAppReferencePage;

  beforeEach(() => {
    page = new AngularAppReferencePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-app-reference works!');
  });
});
