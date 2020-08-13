import { newE2EPage } from '@stencil/core/testing';

describe('bicycle-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bicycle-avatar></bicycle-avatar>');

    const element = await page.find('bicycle-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
