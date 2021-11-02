import './components/AppMenu/AppMenu';
import './views/AppView/AppView';
import './style.scss';

let elRoot;

const onLoad = () => {
  elRoot = document.querySelector('#root');

  const app = document.createElement('app-view');

  elRoot.appendChild(app);
};

window.addEventListener('load', onLoad);
