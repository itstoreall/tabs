const refs = {
   controls: document.querySelector(`#tabs-1 [data-controls]`),
   panes: document.querySelector(`#tabs-1 [data-panes]`),
};

console.log(refs);

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
   };

   // Добавляет сласс Эктив на текущую ссылку
   const controlItem = e.target;
   controlItem.classList.add('controls__item--active');

   console.log(currentActiveControlItem);
});