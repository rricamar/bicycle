import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bicycle-avatar',
  styleUrl: 'bicycle-avatar.css',
  shadow: true,
})
export class BicycleAvatar {

  @Prop() url: string;

  render() {
    return (
      <div><img src={this.url}></img></div>
    );
  }

}
