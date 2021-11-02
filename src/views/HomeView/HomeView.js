import styles from './HomeView.scss';
import template from './HomeView.html?raw';
import BaseView from '../../BaseView';

class HomeView extends BaseView {
  constructor() {
    super({ styles, template });
  }
}

customElements.define('home-view', HomeView);
