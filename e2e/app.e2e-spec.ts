import { CrazeAlphaSassPage } from './app.po';

describe('craze-alpha-sass App', () => {
  let page: CrazeAlphaSassPage;

  beforeEach(() => {
    page = new CrazeAlphaSassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
