export default function jsonp(url, callbackName) {
  let scriptElement = document.createElement('script');
  url = url.indexOf('?') !== -1 ? `${url}&cb=${callbackName}` : `${url}?cb=${callbackName}`;
  scriptElement.src= url;
  document.querySelector('head').appendChild(scriptElement);
}