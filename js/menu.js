<<<<<<< HEAD
(() => {
  const refs = {
    openMenulBtn: document.querySelector('[data-menu-open]'),
    closeMenulBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenulBtn.addEventListener('click', toggleMenu);
  refs.closeMenulBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
=======
(() => {
  const refs = {
    openMenulBtn: document.querySelector('[data-menu-open]'),
    closeMenulBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenulBtn.addEventListener('click', toggleMenu);
  refs.closeMenulBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
>>>>>>> 0fad82e623fd0adc2a04ab029724999e325bf571
})();