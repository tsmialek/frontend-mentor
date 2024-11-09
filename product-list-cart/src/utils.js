export function getImageUrl(img) {
  return new URL(`./assets/images/${img}`, import.meta.url).href;
}

export function formatPrice(price) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}
