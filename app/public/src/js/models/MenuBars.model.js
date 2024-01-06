'use strict';


class MenuBarsModel {

  #typeEventsAllowed;

  constructor() {
    this.#typeEventsAllowed = ['click', 'keydown'];
  }

  get typeEventsAllowed() {
    return this.#typeEventsAllowed;
  }
}


export default MenuBarsModel;
