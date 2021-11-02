import styles from './ResidentialView.scss';
import template from './ResidentialView.html?raw';
import BaseView from '../../BaseView';

class ResidentialView extends BaseView {
  constructor() {
    super({ styles, template });
  }
}

customElements.define('residential-view', ResidentialView);
