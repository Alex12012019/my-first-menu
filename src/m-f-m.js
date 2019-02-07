/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 */


// Import LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { MyFirstMenu } from './my-first-menu';

export class MFM extends MyFirstMenu {
  constructor() {
    // Must call superconstructor first.
    super();
  }

  render() {
	  MyFirstMenu.render();
    return html`

    <div id="yyy">

    </div>
    `;
  }


}

// Register the element with the browser
customElements.define('m-f-m', MFM);
