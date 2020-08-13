import { newSpecPage } from '@stencil/core/testing';
import { BicycleAvatar } from '../bicycle-avatar';

describe('bicycle-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BicycleAvatar],
      html: `<bicycle-avatar url="img-url"></bicycle-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <bicycle-avatar url="img-url">
        <mock:shadow-root>
          <div><img src="img-url"></img></div>
        </mock:shadow-root>
      </bicycle-avatar>
    `);
  });
});
