// Plagin

class Tabs {
   constructor({
      rootSelector, 
      activeControlClass = 'active',
      activePaneClass = 'active',
      activeTab = 1,
   }) {
      this._refs = this._getRefs(rootSelector);
      this._activeControlClass = activeControlClass;
      this._activePaneClass = activePaneClass;
      this._activeTabIdx = activeTab - 1;

      this._bindEvents();

      this._setActiveTab();
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
      e.preventDefault();

      if (e.target.nodeName !== 'A') {
         console.log("---");
         return;
      };

      this._removeActiveTabe();

      const controlItem = e.target;
      controlItem.classList.add(this._activeControlClass);

      const paneId = this._getPaneId(controlItem);
      this._setActivePane(paneId)
   }

   _setActiveTab() {
      const controlItems = this._refs.controls.querySelectorAll('a')
      const control = controlItems[this._activeTabIdx];

      control.classList.add(this._activeControlClass);

      const paneId = this._getPaneId(control);
      this._setActivePane(paneId);
   }

   _removeActiveTabe() {
      const currentActiveControlItem = this._refs.controls.querySelector(
         `.${this._activeControlClass}`
      );

      if (!currentActiveControlItem) {
         return;
      };
      
      currentActiveControlItem.classList.remove(this._activeControlClass);

      const paneId = this._getPaneId(currentActiveControlItem);
      this._removeActivePane(paneId);
   }
   
   _setActivePane(paneId) {
      const pane = this._getPaneById(paneId);
      pane.classList.add(this._activePaneClass);
   }

   _removeActivePane(paneId) {
      const pane = this._getPaneById(paneId);
      pane.classList.remove(this._activePaneClass);
   }

   _getPaneId(control) {
         return control.getAttribute('href').slice(1);
   }

   _getPaneById(id) {
      return this._refs.panes.querySelector(`#${id}`);
   }
};

// Instance 1.
const tabs1 = new Tabs({
   rootSelector: '#tabs-1',
   activeControlClass: 'controls__item--active',
   activPaneClass: 'pane--active',
   activeTab: 1,
});

// Instance 2.
const tabs2 = new Tabs({
   rootSelector: '#tabs-2',
   activeControlClass: 'controls__item--active',
   activPaneClass: 'pane--active',
   activeTab: 1,
});