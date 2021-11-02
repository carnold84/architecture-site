import styles from './AppMenu.scss';
import template from './AppMenu.html?raw';
import BaseComponent from '../../BaseComponent';

class AppMenu extends BaseComponent {
  elToggleBtn;
  isOpen = false;

  constructor() {
    super({ styles, template });

    this.elToggleBtn = this.shadow.querySelector('#toggle_btn');
  }

  connectedCallback() {
    console.log('AppMenu connected');
    this.elToggleBtn.addEventListener('click', this.onToggleOpen);
  }

  onToggleOpen = () => {
    if (this.isOpen === true) {
      this.classList.remove('is_open');
      this.isOpen = false;
    } else {
      this.classList.add('is_open');
      this.isOpen = true;
    }
  };

  close = () => {
    console.log('close');
    this.classList.remove('is_open');
    this.isOpen = false;
  };
}

customElements.define('app-menu', AppMenu);
