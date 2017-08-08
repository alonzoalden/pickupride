import { PickupPage } from './app.po';

describe('pickup App', function() {
  let page: PickupPage;

  beforeEach(() => {
    page = new PickupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
