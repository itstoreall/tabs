// /* // Refactoring

const refs = {
   controls: document.querySelector(`#tabs-1 [data-controls]`),
   panes: document.querySelector(`#tabs-1 [data-panes]`),
};

refs.controls.addEventListener('click', onControlClick);

function onControlClick(e) {
   e.preventDefault();

   if (e.target.nodeName !== 'A') {
      console.log("---");
      return;
   };

   const currentActiveControlItem = refs.controls.querySelector('.controls__item--active');

   // Если сласс Эктив есть, убираем его с ссылки
   if (currentActiveControlItem) {
      currentActiveControlItem.classList.remove('controls__item--active');

      // и меняем на карточках
      const paneId = getPaneId(currentActiveControlItem);
      const pane = getPaneById(paneId);
      pane.classList.remove('pane--active');
   };

   // Добавляет сласс Эктив на текущую ссылку
   const controlItem = e.target;
   controlItem.classList.add('controls__item--active');

   const paneId = getPaneId(controlItem);
   const pane = getPaneById(paneId);
   pane.classList.add('pane--active')

   console.log(pane);
};

function getPaneId(control) {
      return control.getAttribute('href').slice(1);
};

function getPaneById(id) {
   return refs.panes.querySelector(`#${id}`);
};

// */

/* // Initial Code

const refs = {
   controls: document.querySelector(`#tabs-1 [data-controls]`),
   panes: document.querySelector(`#tabs-1 [data-panes]`),
};

refs.controls.addEventListener('click', e => {
   e.preventDefault();

   console.log(e.target);

   if (e.target.nodeName !== 'A') {
      console.log("---");
      return;
   };

   // Проверяет есть ли уже активный таб
   const currentActiveControlItem = refs.controls.querySelector('.controls__item--active');

   // Если сласс Эктив есть, убираем его с ссылки
   if (currentActiveControlItem) {
      currentActiveControlItem.classList.remove('controls__item--active');

      // и меняем на карточках
      const paneId = currentActiveControlItem.getAttribute('href').slice(1);
      const pane = refs.panes.querySelector(`#${paneId}`);
      pane.classList.remove('pane--active')
   };

   // Добавляет сласс Эктив на текущую ссылку
   const controlItem = e.target;
   controlItem.classList.add('controls__item--active');

   const paneId = controlItem.getAttribute('href').slice(1);

   const pane = refs.panes.querySelector(`#${paneId}`);

   pane.classList.add('pane--active')

   console.log(currentActiveControlItem);
   console.log(paneId);
   console.log(pane);
});

*/