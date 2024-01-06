'use strict';

import MenuBarsModel from '../models/MenuBars.model.js';


class MenuBarsController {

  #MENU_BARS = document.querySelector('.js-menu-bars');
  #NAVIGATION = document.querySelector('.js-navigation');
  #NAVIGATION_FIRST_LINK = document.querySelector('.js-list-item');

  constructor() {
    this.#addEventListenerFor(this.#MENU_BARS);
  }

  #addEventListenerFor(nodeHtml) {
    const typeEventsAllowed = new MenuBarsModel().typeEventsAllowed;

    typeEventsAllowed.forEach(eventType => {
      nodeHtml.addEventListener(eventType, () => {
        if(eventType === 'click') this.#configNodeHtml();
      });
    });
  }

  #configNodeHtml() {
    this.#changeAriaLabelOf(this.#MENU_BARS);
    this.#changeAriaStateOf(this.#NAVIGATION);
    this.#addCss('is-navigation-theme-active', 'is-menu-bars-active');
  }

  #addCss(...classNames) {
    const [classNameNavigation, classNameBars] = classNames;

    this.#NAVIGATION.classList.toggle(classNameNavigation);
    this.#MENU_BARS.classList.toggle(classNameBars);
  }

  #changeAriaStateOf(navigation) {
    navigation.ariaHidden = navigation.ariaHidden === 'false';
    navigation.ariaExpanded = navigation.ariaExpanded === 'false';
  }

  #changeAriaLabelOf(menuBars) {
    const defaultAriaLabel = 'Botão para abrir menu lateral';

    if(menuBars.ariaLabel === defaultAriaLabel) {
      return menuBars.ariaLabel = 'Botão para fechar o menu lateral!';
    }

    menuBars.ariaLabel = defaultAriaLabel;
  }
}


new MenuBarsController();
