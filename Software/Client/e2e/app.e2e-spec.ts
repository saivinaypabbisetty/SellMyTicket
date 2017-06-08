import { WorkPage } from './app.po';

describe('work App', () => {
  let page: WorkPage;

  beforeEach(() => {
    page = new WorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
