import styles from './AppView.scss';
import template from './AppView.html?raw';
import BaseComponent from '../../BaseComponent';
import '../HomeView/HomeView';
import '../ResidentialView/ResidentialView';

class AppView extends BaseComponent {
  elAppMenu;
  elContainer;
  elCurrentView;
  elPreviousView;

  menuItems = [
    {
      label: 'Civic',
      path: '/',
    },
    {
      label: 'Residential',
      path: '/residential',
    },
  ];

  constructor() {
    super({ styles, template });
  }

  connectedCallback() {
    this.elAppMenu = this.shadow.querySelector('#app_menu');
    this.elContainer = this.shadow.querySelector('#container');

    this.menuItems.forEach(({ label, path }) => {
      const link = document.createElement('a');
      link.href = path;
      link.innerHTML = label;
      link.addEventListener('click', this.onNavigate);
      this.elAppMenu.appendChild(link);
    });

    window.addEventListener('popstate', () => {
      this.updateView();
    });

    this.updateView();
  }

  onNavigate = (evt) => {
    evt.preventDefault();

    const url = evt.currentTarget.href;

    window.history.pushState({}, '', url);

    this.elAppMenu.close();

    this.updateView();
  };

  updateView = () => {
    const path = window.location.pathname;

    this.elPreviousView = this.elCurrentView;

    if (path === '/') {
      this.elCurrentView = document.createElement('home-view');
    } else if (path === '/residential') {
      this.elCurrentView = document.createElement('residential-view');
    }

    this.elCurrentView.style.zIndex = 2;

    this.elContainer.appendChild(this.elCurrentView);
    if (this.elPreviousView) {
      this.elPreviousView.style.zIndex = 1;
      this.elPreviousView.addEventListener('hideEnd', this.onHideEnd);
      this.elPreviousView.hide();
    }
    this.elCurrentView.show();
  };

  onHideEnd = (evt) => {
    this.elPreviousView.removeEventListener('hideEnd', this.onHideEnd);
    this.elPreviousView.remove();
  };
}

customElements.define('app-view', AppView);
