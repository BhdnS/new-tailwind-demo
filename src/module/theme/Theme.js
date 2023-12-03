import light from '../../images/theme/light.png';
import dark from '../../images/theme/dark.png';

export default class Theme {
  constructor() {
    this.html = document.querySelector('html');
    this.theme = document.getElementById('theme');
    this.themeIcon = document.getElementById('themeIcon');
    this.themeText = document.getElementById('themeText');
  }

  themeToggle() {
    this.#themeDefaultSystem();
    this.#clickThemeBtn();
  }

  #clickThemeBtn() {
    this.theme.addEventListener('click', () => {
      if (this.html.classList.contains('dark')) {
        this.html.classList.remove('dark');
        this.#addLight();
      } else {
        this.html.classList.remove('light');
        this.#addDark();
      }
    });
  }

  #themeDefaultSystem() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.#addDark();
    } else {
      this.#addLight();
    }
  }

  #addDark() {
    this.html.classList.add('dark');
    this.themeText.innerText = 'Dark';
    this.themeIcon.src = dark;
  }

  #addLight() {
    this.html.classList.add('light');
    this.themeText.innerText = 'Light';
    this.themeIcon.src = light;
  }
}
