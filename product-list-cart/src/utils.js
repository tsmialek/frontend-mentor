export function getImageUrl(img) {
  console.log(img);
  return new URL(`./assets/images/${img}`, import.meta.url).href;
}
