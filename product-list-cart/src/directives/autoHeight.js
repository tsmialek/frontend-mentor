export const autoHeight = {
  mounted(el) {
    el.observer = new ResizeObserver(() => {
      el.style.height = el.firstElementChild.clientHeight + 'px';
    });
    el.observer.observe(el.firstElementChild);
  },
  unmounted(el) {
    el.observer.disconnect();
  },
};
