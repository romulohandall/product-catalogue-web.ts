import { CfAngularTutorial2ndtryPage } from './app.po';

describe('cf-angular-tutorial2ndtry App', () => {
  let page: CfAngularTutorial2ndtryPage;

  beforeEach(() => {
    page = new CfAngularTutorial2ndtryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
