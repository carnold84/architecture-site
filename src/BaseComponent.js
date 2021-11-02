// base web component. Handles adding styles and template
class Component extends HTMLElement {
  constructor({ styles, template }) {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = template;

    const style = document.createElement('style');
    style.innerHTML = styles;

    this.shadow.appendChild(style);
  }
}

export default Component;
