import BaseComponent from './BaseComponent';

// base view. Handles adding show and hide classes and listeners
class View extends BaseComponent {
  id;

  constructor({ id, styles, template }) {
    super({ styles, template });

    this.id = id;
  }

  hide = () => {
    this.addEventListener('transitionend', this.onHideEnd, true);
    this.classList.remove('show');
  };

  onHideEnd = () => {
    this.removeEventListener('transitionend', this.onHideEnd, true);
    this.classList.remove('is_visible');

    const hideEvent = new CustomEvent('hideEnd', {
      detail: this.id,
    });
    this.dispatchEvent(hideEvent);
  };

  show = () => {
    this.classList.add('is_visible');

    setTimeout(() => {
      this.classList.add('show');
    }, 100);
  };
}

export default View;
