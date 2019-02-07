/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 */


// Import LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

export class MyFirstMenu extends LitElement {
  /**
   * Define properties. Properties defined here will be automatically 
   * observed.
   */
  static get properties() {
    return {
      message: { type: String },
      name: { type: String },
      pie: { type: Boolean }
    };
  }

  /**  
   * In the element constructor, assign default property values.
   */
  constructor() {
    // Must call superconstructor first.
    super();

    // Initialize properties
    this.loadComplete = false;
	
	this.OPOStyle = 'position: absolute; left: 5px; top: 5px; height: 5px; width: 5px; text-decoration: none; display: block; border: solid 1px; background-color: antiquewhite; border-color: brown;';

	//alert(this.style.width);
	this.addEventListener('click', this._onClick); 
  }

	/**
   * Define a template for the new element by implementing LitElement's
   * `render` function. `render` must return a lit-html TemplateResult.
   */
  render() {
    return html`

    <div id="xxx" style="${this.OPOStyle}">

    </div>
    `;
  }

	_OverEl(event) {
		event.target.style.background = "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 10%, rgba(255, 255, 255, 0.5) 5%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0.0) 100%)";
		event.target.style.color = "white";
	};

	_LeaveEl(event) {
		event.target.style.background = "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%)";
		event.target.style.color = "yellow";
	};

	_onClick(event) {
		//this._DrawEl();
	};
	
	_DrawEl() {
		//alert(this.pie);
        var e = document.getElementById(this.id);

		const yyy = this.shadowRoot.getElementById('xxx');
		yyy.style.height = e.style.height;
		yyy.style.width = e.style.width;
		var newUl = document.createElement('UL');
		newUl.style = "text-align: left; background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%); width: 98%; padding: 1%;"; 

		for (var i = 0; i < e.childNodes.length; i++) {
			if (e.childNodes[i].outerHTML != undefined) {
				if (e.childNodes[i].nodeName == "MENU") {
					for (var j = 0; j < e.childNodes[i].childNodes.length; j++) {
						if (e.childNodes[i].childNodes[j].nodeName == "A") {
							var newLi = document.createElement('LI');
							var newA = document.createElement('A');
							newA.href = e.childNodes[i].childNodes[j].href;
							newA.text = e.childNodes[i].childNodes[j].text;
							newA.style = "padding: 7px; font-family: Arial, Helvetica, sans-serif;  font-size: 25px; text-decoration: none; color: yellow;";
							newA.addEventListener('mouseover', this._OverEl); 
							newA.addEventListener('mouseleave', this._LeaveEl); 
							newLi.appendChild(newA);
							newUl.appendChild(newLi);
						};
						if (e.childNodes[i].childNodes[j].nodeName == "IMG") {
							var newImg = document.createElement('IMG');
							newImg.src = e.childNodes[i].childNodes[j].src;
							newImg.style="position:absolute;left:0px;top:0px;width:100%";
							yyy.appendChild(newImg);
						};
					};
				};
			};
		}
		var newNav = document.createElement('NAV');
		newNav.appendChild(newUl);
		newNav.style = "width: 100%; mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 25%, #ffffff 75%, rgba(255, 255, 255, 0) 100%); margin: 0 auto; padding: 5px 0; position:absolute; left:0px; top:0px; text-align: left;  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%); box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6); font-family: Arial, Helvetica, sans-serif; font-weight: 100; color: white; text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.4); font-size: 25px; text-decoration: none; display: block;box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);";
		yyy.appendChild(newNav);
	}  

  /**
   * Implement firstUpdated to perform one-time work on first update:
   * - Call a method to load the lazy element if necessary
   * - Focus the checkbox
   */
  firstUpdated() {
	this._DrawEl();
  }

  /**
   * Event handler. Gets called whenever the checkbox fires a `change` event.
   * - Toggle whether to display <lazy-element>
   * - Call a method to load the lazy element if necessary
   */
  togglePie(e) {
    this.pie = !this.pie;
    this.loadLazy();
  }

  /**
   * If we need the lazy element && it hasn't already been loaded, 
   * load it and remember that we loaded it.
   */
  async loadLazy() {
    console.log('loadLazy');
  }
}

// Register the element with the browser
customElements.define('my-first-menu', MyFirstMenu);
