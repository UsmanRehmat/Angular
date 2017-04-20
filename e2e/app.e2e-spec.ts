import { FirstAppVSCPage } from './app.po';

describe('first-app-vsc App', () => {
  let page: FirstAppVSCPage;

  beforeEach(() => {
    page = new FirstAppVSCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
