import { Component } from '@stencil/core';

import { checkAnon } from '../../global/utils';

@Component({
  tag: 'tabs-page',
  styleUrl: 'tabs-page.scss'
})
export class TabsPage {

  render() {
    return (
      <ion-tabs color='dark'>
        {/*<ion-tab label='feed' icon='paper' name='feed-tab'>
          <ion-nav></ion-nav>
    </ion-tab>*/}

        <ion-tab selected={true} label='beers' icon='beer' name='beer-tab'>
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab label='bars' icon='pint' name='bar-tab'>
          <ion-nav></ion-nav>
        </ion-tab>

        {checkAnon() ? null : <ion-tab label='favorites' icon='star' component='favorites-page'>
        </ion-tab>}
      </ion-tabs>
    );
  }
}