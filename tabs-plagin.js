class Tabs {
   constructor({ rootSelector, activeControlClass = 'active' }) {
      this._refs = this._getRefs(rootSelector);
      this._activeControlClass = activeControlClass;

      this._bindEvents();
   }

   _getRefs(root) {
      const refs = {};

      refs.controls = document.querySelector(`${root} [data-controls]`);
      refs.panes = document.querySelector(`${root} [data-panes]`);

      return refs;
   }

   _bindEvents() {
      this._refs.controls.addEventListener('click', this._onControlClick.bind(this));
   }

   _onControlClick(e) {
      console.log(e.target);
      console.log(this);

      e.preventDefault();

      if (e.target.nodeName !== 'A') {
         console.log("---");
         return;
      };
      
      const currentActiveControlItem = this._refs.controls.querySelector(`.${this._activeControlClass}`);

      console.log(currentActiveControlItem);
   }
};

const tabs1 = new Tabs({
   rootSelector: '#tabs-1',
   activeControlClass: 'controls__item--active',
});

console.log(tabs1);

